#!/usr/bin/env python3

import sys
import py_functions as pf
import matplotlib.pyplot as plt
import numpy as np

arguments=[]
for arg in sys.argv[1:]:
    arguments.append( arg )
OUTNAME = 0
if len(arguments)>=1:
    OUTNAME = arguments[0]


plt.style.use( 'seaborn-paper' )
fig = plt.figure()

ax1 = fig.add_axes( [0.1, 0.51, 0.6, 0.39] )
pf.plot_mag_susc_2( ax1 , colour='black' )
ax1.set_xticklabels([])

ax2 = fig.add_axes( [0.1, 0.12, 0.6, 0.39] )
pf.plot_entropy_2( ax2 , colour='black' )


if OUTNAME!=0:
    plt.savefig( OUTNAME )
else:
    plt.show()
