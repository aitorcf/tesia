#!/usr/bin/env python3

import numpy as np
import matplotlib.pyplot as plt
import sys
import py_functions as pf
import subprocess


arguments = []
for argument in sys.argv[1:]:
    arguments.append( argument )
if len( arguments ) < 5:
    print( 'Incorrect arguments. O/E (1) and Q and S for the first and second cases (2) are mandatory (e.g. o 2 1 2 2) \
            , #EIGENVALUES is optional. Exiting.' )
    sys.exit()

O_E = arguments[0]
Q_1 = arguments[1]
S_1 = arguments[2]
Q_2 = arguments[3]
S_2 = arguments[4]

filename_1 = '{}-q{}s{}.dat'.format( O_E , Q_1 , S_1 )
filename_2 = '{}-q{}s{}.dat'.format( O_E , Q_2 , S_2 )

subprocess.call([ './99_f_extract_1sub' , O_E , Q_1 , S_1 ])
subprocess.call([ './99_f_extract_1sub' , O_E , Q_2 , S_2 ])

subprocess.call([ './99_f_fix_1sub_file.py' , filename_1 ])
subprocess.call([ './99_f_fix_1sub_file.py' , filename_2 ])

n_steps = pf.get_N( filename_1 )

f_1 = open( filename_1 , 'r' )
f_2 = open( filename_2 , 'r' )


if np.size(arguments) > 5: 
    n_eigenvalues = int(arguments[5])
else: n_eigenvalues = 6


steps = np.arange( pf.get_n( filename_1 ) , pf.get_N( filename_1 ) , 2 ) 
eigenvalues = np.empty( ( len(steps) , n_eigenvalues ) )

plt.style.use( 'seaborn-paper' )
fig, ax = plt.subplots()
ax.spines['top'].set_visible( False )


s1 = int( S_1 )
s2 = int( S_2 ) 
s1 = f"{s1-1}/2" if ( s1%2==0 and s1!=1 ) else f"{int( (s1-1)/2 )}"
s2 = f"{s2-1}/2" if ( s2%2==0 and s2!=1 ) else f"{int( (s2-1)/2 )}"

pf.plotfile( f_1 , steps , eigenvalues , ax , colour="tab:blue" , llabel=f"Q = {Q_1}, S = {s1}" )
pf.plotfile( f_2 , steps , eigenvalues , ax , colour="tab:orange" , llabel=f"Q = {Q_2}, S = {s2} " , llinestyle='--' )

f_1.close()
f_2.close()

ymax = 4.5
ylims = [ -0.2 , ymax ]
yticks = np.arange( 0 , ymax , 1 )

ax.set_ylim( ylims )
ax.set_yticks( yticks )

pf.label_flowplot( n_steps , n_eigenvalues , ax )

twin = ax.twinx()
twin.set_ylim( ylims )
twin.set_yticks( yticks )
twin.set_yticklabels([])
twin.spines['top'].set_visible( False )

ax.set_xticks( np.arange( 0 , 105 , 20 ) )

ax.tick_params( axis='both' , which='major' , labelsize=15 )
ax.legend( loc='upper left' , frameon=True , framealpha=0.8 , facecolor='white' , edgecolor='white' , fontsize=15 )

plt.show()


