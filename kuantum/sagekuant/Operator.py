from .OpChain import OpChain
from .Simple import Simple

class Operator( OpChain , Simple ):
    """
    Simple operator.
     - Parents: OpChain
     - Children: FermionOp, BosonOp 
    """
    is_composite = False