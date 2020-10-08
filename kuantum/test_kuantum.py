#!/usr/bin/env python3

from kuantum import *

cre_imp = FermionOp( 'imp' , 'cre' )
ann_imp = FermionOp( 'imp' , 'ann' )

u = Constant( 'u' )

print( cre_imp.graph )

number = OpChain( [ ( cre_imp , ann_imp ) , cre_imp ] )
number.oprint()
