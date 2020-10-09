#!/usr/bin/env python3

import numpy as np
import py_functions as pf
import sys
import scipy.optimize as opt
import matplotlib.pyplot as plt
from matplotlib.colors import Normalize
import matplotlib.colors as mcolors
import matplotlib.cm as cm
from matplotlib.lines import Line2D
import os
import subprocess
import math as mt

arguments = []
for arg in sys.argv[1:]:
    arguments.append(arg)

OUTFILE = 0
if np.size(arguments)>0:
    OUTFILE = arguments[0]


J = [ 0.06 , 0.1 , 0.2  ]

plt.style.use('seaborn-paper')
fig = plt.figure()
ax_mag = fig.add_axes( [0.1, 0.51, 0.6, 0.39] )
ax_entr = fig.add_axes( [0.1, 0.12, 0.6, 0.39] )

markers = [ 'd' , 'o' , '^' ,'s' ]
colours = mcolors.TABLEAU_COLORS
i = 0
for j, colour, mark in zip( J , colours.keys() , markers ):
    param = open('param','r')
    new_param = open('new_param','w+')
    for line in param:
        if line=="" or line=="\n":
            new_param.write("\n")
        else:
            if line[0]=='J':
                new_param.write( "Jkondo={}\n".format(j) )
            else:
                new_param.write(line)
    param.close()
    new_param.close()
    subprocess.call([ 'mv' , 'new_param' , 'param' ])
    subprocess.call( './1d_run_th_fl' )
    
    N = pf.get_N( 'e-q0s1_table1.dat' )
   
    col = colours[colour]

    pf.plot_mag_susc_2( ax_mag , colour=col , mark=mark , llabel=f"$J={j}$" , twin=False )
    ax_mag.set_xticklabels([])
    pf.plot_entropy_2( ax_entr , colour=col , mark=mark , twin=False )   

ymax=1
par = ax_entr.twinx()
par.set_ylim([ 0 , ymax ])
par.set_yticks(( 0 , mt.log(2) ))
par.set_yticklabels(( '$\ln(1)$ : SC' , '$\ln(2)$ : LM' ) )
par.tick_params( labelsize='large' )

ymax=0.5
par = ax_mag.twinx()
par.set_ylim([ 0 , ymax ])
par.set_yticks(( 0 , 0.25 ))
par.set_yticklabels(('$0$ : SC','$1/4$ : LM'))
par.tick_params( labelsize='large' )

#ax_mag.set_ylim([ 0 , ax_mag.get_ylim()[1]  ])
ax_mag.legend( loc='upper left' , frameon=True , facecolor='white' , edgecolor='white' , framealpha=0.8 , ncol=2 , fontsize='large' )

if OUTFILE!=0:
    plt.savefig("/graphs_and_data/arrowplots_multiple/{}".format(OUTFILE))
else:
    plt.show()


