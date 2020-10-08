#!/usr/bin/env python3

import numpy as np
import py_functions as pf
import sys
import scipy.optimize as opt
import matplotlib.pyplot as plt
from matplotlib.colors import Normalize
import matplotlib.cm as cm
from matplotlib.lines import Line2D
import math as mt


arguments = []
for arg in sys.argv[1:]:
    arguments.append(arg)
OUTFILE = 0
if np.size(arguments)>=1:
    OUTFILE = arguments[1]


plt.style.use('seaborn-dark-palette')
fig, ax = plt.subplots()
plt.grid( b=True, which='major', color='black', linewidth='0.4' , alpha=0.3 )

N = pf.get_N( 'e-q0s1_table1.dat' )
N_array = np.arange( 0 , N , 2 )

J_lm = np.zeros( len( N_array ) )
pf.plot_arrows( N_array , J_lm , ax , colour='tab:blue' , llabel='local moment' )

J_sc = 1.33742913 * np.ones( len( N_array ) )
pf.plot_arrows( N_array , J_sc , ax , colour='tab:red' , llabel='strong coupling' )

pf.plot_arrow_diagram( ax )

plt.legend( loc="upper center" , frameon=True , framealpha=0.7 , facecolor='white', edgecolor='white' )


if OUTFILE!=0:
    plt.savefig("{}".format(OUTFILE))
else:
    plt.show()


