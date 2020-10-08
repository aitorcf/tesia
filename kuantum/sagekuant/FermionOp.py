from .Operator import Operator

class FermionOp( Operator ):

    def __init__( self , sstate , cre_or_ann ):
        self.state = sstate
        self.action = cre_or_ann
        self.kind = 'fermionic'
        self.graph = 'c{}.{}'.format( '^' if self.action=='cre' else '' , self.state )
        self.chain = self

