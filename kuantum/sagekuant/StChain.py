from .Kuantum import Kuantum

class StChain( Kuantum ):
    def __init__( self , sts ):
        self.states = sts
        self.graph = gen_graph( sts )


# Helper functions

def gen_graph( sts ):
    return ' x '.join( state.graph for state in sts )
