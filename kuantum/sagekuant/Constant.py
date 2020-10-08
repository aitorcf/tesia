from .OpChain import OpChain
from .Simple import Simple

class Constant( OpChain , Simple ):
    is_composite = False    

    def __init__( self , val ):
        self.value = val  # string or number
        self.graph = str( val )
        self.chain = self