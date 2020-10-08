#class Kuantum():


# ===========================


def gen_graph( ops ):
    # helper function for generating the 'graph' variable of OpChain

    if isinstance( ops , OpChain ):
        return ops.graph
    elif type( ops )==list:
        return '( ' + '  +  '.join([ gen_graph( elem ) for elem in ops ]) + ' )'
    elif type( ops )==tuple:
        return '( ' + ' * '.join([ gen_graph( elem ) for elem in ops ]) + ' )'

def gen_chain( ops ):
    if isinstance( ops , list ):
        if len( ops )==1: return ops[0]
        return OpChain.__add__( OpChain( ops[0] ) , OpChain( ops[1:] ) )
    elif isinstance( ops , tuple ):
        if len( ops )==1: return ops[0]
        return OpChain.__mul__( OpChain( ops[0] ) , OpChain( ops[1:] ) )
    elif ops.is_composite:
        return ops.chain
    elif not ops.is_composite:
        return ops


class OpChain:
    # Chain of operators
    # - Parents: Kuantum
    # - Children: Operator, Constant 

    def __init__( self, ops ):
        self.chain = gen_chain( ops )
        self.graph = gen_graph( ops )
        self.is_composite = bool( isinstance( self.chain , list ) or isinstance( self.chain , tuple ) )

    def __add__( self , other ):
        return OpChain( [ self , other ] )

    def __mul__( self , other ):
        return OpChain( ( self , other ) )
    
    def oprint( self ): 
        print( self.graph )


class Constant( OpChain ):
    is_composite = False    

    def __init__( self , val ):
        self.chain = val  # string or number
        self.graph = str( val )


class Operator( OpChain ):
    """
    Simple operator.
     - Parents: OpChain
     - Children: FermionOp, BosonOp 
    """
    is_composite = False

    def __init__( self ): pass

# ---------------------------

#class BosonOp(Operator):
    

class FermionOp(Operator):

    def __init__( self , sstate , cre_or_ann ):
        self.state = sstate
        self.action = cre_or_ann
        self.kind = 'fermionic'
        self.graph = 'c{}_{}'.format( '^' if self.action=='cre' else '' , self.state )
        self.chain = self

# ===========================

#class State(Kuantum):

# ---------------------------

#class Ket(State):


#class Bra(State):

# ===========================

#class Constant(Kuantum):

