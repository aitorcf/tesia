#!/usr/bin/env python3

import numpy as np
import qutip as qt
import math as mt


u = 0.001
gamma = 0.0001
t = 0.0001


ann = qt.destroy(2)
cre = qt.create(2)
num = cre * ann


a_up = qt.tensor( ann ,  qt.qeye(2) , qt.qeye(2) , qt.qeye(2) , qt.qeye(2) , qt.qeye(2) )
a_up_dag = qt.tensor( cre ,  qt.qeye(2) , qt.qeye(2) , qt.qeye(2) , qt.qeye(2) , qt.qeye(2) )

a_down = qt.tensor( qt.qeye(2) , ann , qt.qeye(2) , qt.qeye(2) , qt.qeye(2) , qt.qeye(2) )
a_down_dag = qt.tensor( qt.qeye(2) , cre , qt.qeye(2) , qt.qeye(2) , qt.qeye(2) , qt.qeye(2) )

d_up = qt.tensor(  qt.qeye(2) , qt.qeye(2) , ann ,  qt.qeye(2) , qt.qeye(2) , qt.qeye(2) )
d_up_dag = qt.tensor(  qt.qeye(2) , qt.qeye(2) , cre ,  qt.qeye(2) , qt.qeye(2) , qt.qeye(2) )

d_down = qt.tensor(  qt.qeye(2) , qt.qeye(2) , qt.qeye(2) , ann ,  qt.qeye(2) , qt.qeye(2) )
d_down_dag = qt.tensor(  qt.qeye(2) , qt.qeye(2) , cre ,  qt.qeye(2) , qt.qeye(2) )

f_up = qt.tensor(  qt.qeye(2) , qt.qeye(2) , qt.qeye(2) , qt.qeye(2) , ann , qt.qeye(2) )
f_up_dag = qt.tensor(  qt.qeye(2) , qt.qeye(2) , qt.qeye(2) , qt.qeye(2) , cre , qt.qeye(2) )

f_down = qt.tensor(  qt.qeye(2) , qt.qeye(2) , qt.qeye(2) , qt.qeye(2) , qt.qeye(2) , ann )
f_down_dag = qt.tensor(  qt.qeye(2) , qt.qeye(2) , qt.qeye(2) , qt.qeye(2) , qt.qeye(2) , cre )

print( d_down_dag )

H_c = mt.sqrt( gamma ) * ( d_down_dag*f_down + d_up_dag*f_up + f_down_dag*d_down + f_up_dag*d_up )

H_d = u * ( qt.eye(12) - d_down_dag*d_down - d_up_dag*d_up - 2*d_down_dag*d_up_dag*d_down*d_up )

H_a = u * ( qt.eye(12) - a_down_dag*a_down - a_up_dag*a_up - 2*a_down_dag*a_up_dag*a_down*a_up )

H_ad = t * ( a_down_dag*d_down + a_up_dag*d_up + d_down_dag*a_down + d_up_dag*a_up )

H = H_c + H_d * H_a + H_ad

print(H)



