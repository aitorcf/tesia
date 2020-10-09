#!/usr/bin/env python3

import py_functions as pf
import matplotlib.colors as mcolors
import matplotlib.cm as cm
from matplotlib.colors import Normalize
import matplotlib.pyplot as plt
import subprocess
import sys
import numpy as np
from matplotlib.lines import Line2D

arguments = []
for arg in sys.argv[1:]:
    arguments.append(arg)
OUTFILE = 0
if len( arguments )>0:
    OUTFILE = arguments[0]


J = [ 0 , 0.06 , 0.1 , 0.2 , 0.9 , 1.34 ]


Lambda = pf.get_lambda( 'param' )
N = pf.get_N( 'e-q0s1_table1.dat' )
N_array = np.arange( 0 , N , 2 )

plt.style.use('seaborn-dark-palette')
fig, ax = plt.subplots()
plt.grid( b=True, which='major', color='black', linewidth='0.4',alpha=0.3)

colours = mcolors.TABLEAU_COLORS
i = 0
for j,colour in zip( J , colours.keys() ):
    pf.write_param( Jkondo=j )

    subprocess.call( './1c_run_flow' )

    pf.plot_arrow_diagram( ax , colour=colours[colour] , llabel='J = {:.2f}'.format(j) , multi=True )

ax.legend( loc='upper right' , frameon=True , facecolor='white' , edgecolor='white' , framealpha=0.7 )

if OUTFILE!=0:
        plt.savefig( OUTFILE )
else:
    plt.show()
