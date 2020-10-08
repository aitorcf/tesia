import numpy as np

U = np.loadtxt( 'arrowflow_points.dat' )[:,1]
G = np.loadtxt( 'arrowflow_points.dat' )[:,0]

L = [ U[i+1]/U[i] for i in range( len(U) - 1 ) ]
Ll = [ (G[i+1]/G[i]) for i in range( len(U) - 1 ) ]

print("\n# U #\n---")
for LL in L: 
    print ( LL )

print("\n# GAMMA #\n---")
for LL in Ll:
    print ( LL )
