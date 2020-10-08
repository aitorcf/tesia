from .Kuantum import Kuantum
from .Simple import Simple

# Egiteke:
# - .expand() bukatu

class OpChain( Kuantum ):
    """
    Chain of operators
    - Parents: Kuantum
    - Children: Operator, Constant 
    """
    def __init__( self, ops ):
        self.chain = ops
        self.graph = gen_graph( ops )
        self.is_composite = bool( isinstance( self.chain , list ) or isinstance( self.chain , tuple ) )

    def __add__( self , other ):
        return OpChain( [ self.chain , other.chain ] )

    def __mul__( self , other ):
        return OpChain( ( self.chain , other.chain ) )

    def expand( self ):
        if not self.is_composite: return self
        
        if isinstance( self.chain , list ):
            return OpChain([ OpChain(elem).expand() for elem in self.chain ])
        
        elif isinstance( self.chain , tuple ):
            if len( self.chain )==2:
                if isinstance(self.chain[0],tuple) and isinstance(self.chain[1],tuple):
                    listuple1 = list( self.chain[0] )
                    listuple2 = list( self.chain[1] )
                    together = tuple( listuple1 + listuple2 )
                    return OpChain( together )
                elif isinstance(self.chain[0],Simple) and isinstance(self.chain[1],tuple):
                    listsimple = [ self.chain[0] ]
                    listuple = list( self.chain[1] )
                    together = tuple( listsimple + listuple )
                    return OpChain( together )
                elif isinstance(self.chain[1],Simple) and isinstance(self.chain[0],tuple):
                    listsimple = [ self.chain[1] ]
                    listuple = list( self.chain[0] )
                    together = tuple( listsimple + listuple )
                    return OpChain( together )                    
            else:
                return OpChain(( OpChain(self.chain[0]).expand() , OpChain(self.chain[1:]).expand() ))


        


# Helper functions

def gen_graph( ops ):
    # helper function for generating the 'graph' variable of OpChain

    if isinstance( ops , OpChain ):
        return ops.graph
    elif type( ops )==list:
        return '( ' + '  +  '.join([ gen_graph( elem ) for elem in ops ]) + ' )'
    elif type( ops )==tuple:
        return '( ' + ' * '.join([ gen_graph( elem ) for elem in ops ]) + ' )'