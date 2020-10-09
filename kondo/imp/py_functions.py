#!/usr/bin/env python3

import subprocess
import os
import numpy as np
import math as mt
import matplotlib.pyplot as plt
import scipy.optimize as opt
from matplotlib.colors import Normalize
import matplotlib.cm as cm
from matplotlib.lines import Line2D


# FILES AND PARAMETERS 

def write_param( **kwargs ):
    subprocess.call([ 'mv' , 'param' , 'new_param' ])

    param = open( 'param' , 'x' )
    new_param = open( 'new_param' , 'r' )

    for line in new_param:
        if line.strip()=='': param.write( line )
        else:

            written = False

            for key in kwargs:
                if len(line) <= len(key): continue
                if line[ : len(key) ]==key:
                    param.write( "{}={}\n".format( key , kwargs[key] ) )
                    written = True
                    break

            if not written:
                param.write( line )

    param.close()
    new_param.close()

    subprocess.call([ 'rm' , 'new_param' ])


def get_lambda( param_path ):   # returns value of lambda in param file
    param = open( param_path , 'r' ).readlines()
    for line in param:
        if line.strip()!=[]:
            if line[:6]=='Lambda':
                return float( line.strip()[7:] )


def get_tmin( param_path ): # returns value of Tmin in param file
    param = open( param_path , 'r' ).readlines()
    for line in param:
        if line.strip()!=[]:
            if line[:4]=='Tmin':
                return float( line.strip()[5:] )


def get_n( filename ): # takes the name of an eigenflow file (e.g. 'e-q1s2.dat')
                       # and returns the min number of nrg iteration present there.
    return int( open( filename , 'r' ).readlines()[0].split()[0] )


def get_N( filename ): # takes the name of an eigenflow file (e.g. 'e-q1s2.dat')
                       # and returns the max number of nrg iteration present there.
    f = open( filename , 'r' )

    for line in f:
        if line.strip()=="":
            return max_n
        max_n = int( line.split()[0] )


def get_J():
    param = open('param','r')
    for line in param:
        if line!="" and line!="\n":
            if line[:6]=='Jkondo':
                return float( line.strip()[7:] )

def get_nrg_scale():
    Lambda = get_lambda( 'param' )
    z = get_z()

    if get_discretization()=='Y':
        return ( 1 + Lambda**-1 ) / 2.0  *  Lambda**( 1.5 - z )

    else:
        return ( 1 - Lambda**-1 ) / mt.log( Lambda ) * Lambda**( 1.5 - z )


def get_z():
    param = open( 'param' , 'r' )

    for line in param:
        if line.strip()=='': continue
        if line.strip()[0]=='z': return float( line.strip()[2:] )

    return 1.0

def get_discretization():
    param = open( 'param' , 'r' )

    for line in param:
        if line.strip()=='': continue
        if line[:14]=='discretization':
            return line.strip()[15:]


# THERMODYNAMICS: CALCULATIONS (no z-averaging)

def equalize_lambdas_and_tmins_imp_ref(): # if lambdas or tmins are not equal, it changes them in ../ref and runs the nrg calculation there
    if ( not are_equal_lambda_imp_ref() ) or ( not are_equal_tmin_imp_ref() ):

        Lambda = get_lambda( 'param' )
        tmin = get_tmin( 'param' )

        change_ref_param_lambda_tmin( Lambda , tmin )

        os.chdir( '../ref' )
        subprocess.call( './0a_run' )
        os.chdir( '../imp' )


def are_equal_lambda_imp_ref(): # returns true if both have the same LAMBDA, false otherwise
    return get_lambda( 'param' )==get_lambda( '../ref/param' )


def are_equal_tmin_imp_ref(): # returns true if both have the same Tmin, false otherwise
    return get_tmin( 'param' )==get_tmin( '../ref/param' )


def change_ref_param_lambda_tmin( Lambda , tmin ): # to be called from imp/ directory
    ref_param = open( '../ref/param' , 'r' )
    new_param = open( '../ref/new_param' , 'w' )

    for Line in ref_param:
        line = Line.strip()
        if line!=[]:
            if line[:6]=='Lambda':
                new_param.write( "Lambda={}\n".format( Lambda ) )
            elif line[:4]=='Tmin':
                new_param.write( "Tmin={}\n".format( tmin ) )
            else: new_param.write( Line )
        else: new_param.write( "\n" )

    ref_param.close()
    new_param.close()

    subprocess.call([ 'mv' , '../ref/new_param' , '../ref/param' ])


# THERMODYNAMICS: CALCULATIONS WITH Z-AVERAGING

def equalize_lambdas_and_tmins_imp_ref_zavg():  # if lambdas or tmins are not equal,
                                                   # it changes them in ../ref/.
                                                   # it does not run the nrg calculation there.
    if ( not are_equal_lambda_imp_ref() ) or ( not are_equal_tmin_imp_ref() ):

        Lambda = get_lambda( 'param' )
        tmin = get_tmin( 'param' )

        change_ref_param_lambda_tmin( Lambda , tmin )


# THERMODYNAMICS: PLOTTING

def plot_mag_susc_2( ax , colour='tab:red' , llabel=0 , mark=None , twin=True ):
    td_data = np.loadtxt( 'td_diff.dat' )
    mag_susc = td_data[:,1]
    temp = td_data[:,0]

    lm = np.zeros((len(temp)))
    sc = np.zeros((len(temp)))

    lm[:] = 0.25
    sc[:] = 0

    mark_every = 3 if mark!=None else None
    if llabel!=0:
        ax.plot( temp , mag_susc , label=llabel , color=colour , linewidth=2 , linestyle='-' , marker=mark , markevery=mark_every )
        ax.legend( loc='upper left' , frameon=True , facecolor='white' , edgecolor='white' , framealpha=0.8)
        ymax=0.5
    else:
        ax.plot( temp , mag_susc , color=colour , linewidth=2 , linestyle='-' , marker=mark , markevery=mark_every )
        ymax=0.4

    ax.plot( temp , sc , color='black' , linestyle='--' , linewidth=0.5 )
    ax.plot( temp , lm, color='black', linestyle='--' , linewidth=0.5 )

    ax.set_xticks( np.logspace( 10**-15 , 1 , 5  ) )
    ax.semilogx( base=10 )
    ax.set_xlabel( '$k_B T$' , fontsize='large' )
    ax.set_ylabel( '$k_B T \chi (T)$' , fontsize='large' )
    ax.set_xlim([ float( get_tmin( 'param' ) ) , 1e0 ])
    ax.set_ylim([ 0 , ymax ])

    if twin:
        par = ax.twinx()
        par.set_ylim([ 0 , ymax ])
        par.set_yticks((0,0.25))
        par.set_yticklabels(('$0$ : SC','$1/4$ : LM'))
    
    plt.xticks( fontsize=10 )
    plt.yticks( fontsize=10 )

    ax.tick_params( axis='both' , which='major' , labelsize='large' )

def plot_entropy_2( ax , llabel=0 , colour='tab:red' , mark=None , twin=True ):
    td_data = np.loadtxt( 'td_diff.dat' )
    entropy = td_data[:,8]
    temp = td_data[:,0]

    sc = np.zeros((len(temp)))
    lm = np.zeros((len(temp)))

    lm[:] = mt.log( 2 )
    sc[:] = mt.log( 1 )

    mark_every = 3 if mark!=None else None

    if llabel!=0:
        ax.plot( temp , entropy , label=llabel , color=colour , linewidth=2 , linestyle='-' , marker=mark , markevery=mark_every )
        ax.legend( loc='upper left' , frameon=True , facecolor='white' , edgecolor='white' , framealpha=0.8)
        ymax=2
    else:
        ax.plot( temp , entropy , color=colour , linewidth=2 , linestyle='-' , marker=mark , markevery=mark_every )
        ymax=1
    ax.plot( temp , sc , linestyle='--' , color='black' , linewidth=0.5 )
    ax.plot( temp , lm , linestyle='--' , color='black' , linewidth=0.5 )

    ax.set_xticks( np.logspace( 10**-15 , 1 , 5 ) )
    ax.semilogx( base=10 )

    ax.set_xlabel( '$k_B T$' , fontsize='large' )
    ax.set_ylabel( '$ S/k_B (T)$' , fontsize='large' )

    ax.set_xlim([ float( get_tmin( 'param' ) ) , 1e0 ])

    ax.set_ylim([ 0 , ymax ])
    ax.set_yticks( np.arange( 0 , ymax , 0.2 ) )

    if twin:
        par = ax.twinx()
        par.set_ylim([ 0 , ymax ])
        par.set_yticks(( 0 , mt.log(2) ))
        par.set_yticklabels(( '$\ln(1)$ : SC' , '$\ln(2)$ : LM' ) )

    plt.xticks( fontsize=10 )
    plt.yticks( fontsize=10 )

    ax.tick_params( axis='both' , which='major' , labelsize='large' )


def plot_mag_susc( ax ):
    td_data = np.loadtxt( 'td_diff.dat' )
    mag_susc = td_data[:,1]
    temp = td_data[:,0]

    lm = np.zeros((len(temp)))
    sc = np.zeros((len(temp)))
    lm[:] = 0.25
    sc[:] = 0.0

    ax.plot( temp , mag_susc , label='impurity magnetic susceptibility' , color='blue' , linewidth=2 , linestyle='-' )
    ax.plot( temp , lm, color='red', linestyle='--' , label="local moment" )
    ax.plot( temp , sc , color='brown' , linestyle='--' , label="strong coupling" )

    ax.legend( loc='upper left' , frameon=True , facecolor='white' , edgecolor='white' , framealpha=0.8)

    ax.semilogx( base=10 )
    ax.set_xlabel( '$k_B T$' )
    ax.set_ylabel( '$k_B T \chi (T)$' )
    ax.set_xlim([ float( get_tmin( 'param' ) ) , 1e0 ])
    ax.set_ylim([ 0 , 0.35 ])


def plot_entropy( ax ):
    td_data = np.loadtxt( 'td_diff.dat' )
    entropy = td_data[:,8]
    temp = td_data[:,0]

    lm = np.zeros((len(temp)))
    sc = np.zeros((len(temp)))
    lm[:] = mt.log( 2 )
    sc[:] = 0

    ax.plot( temp , entropy , label='impurity entropy' , color='blue' , linewidth=2 , linestyle='-' )
    ax.plot( temp , lm , color='red', linestyle='--' , label="local moment" )
    ax.plot( temp , sc , color='brown' , linestyle='--' , label="strong coupling" )

    ax.legend( loc='upper left' , frameon=True , facecolor='white' , edgecolor='white' , framealpha=0.8)

    ax.semilogx( base=10 )
    ax.set_xlabel( '$k_B T$' )
    ax.set_ylabel( '$ S/k_B (T)$' )
    ax.set_xlim([ float( get_tmin( 'param' ) ) , 1e0 ])
    ax.set_ylim([ 0 , 1 ])
    plt.yticks( [ 0 , 0.2 , 0.4 , 0.6 , 0.8 , 1.0 , mt.log(2) ] , ( '0' , '0.2' , '0.4' , '0.6' , '0.8' , '1.0' , 'ln(2)' ) )


def plot_heat_capacity( ax ):
    td_data = np.loadtxt( 'td_diff.dat' )
    c = td_data[:,6]
    temp = td_data[:,0]

    ax.plot( temp , c , label='impurity heat capacity' , color='blue' , linewidth=2 , linestyle='-' )

    ax.legend( loc='upper left' , frameon=True , facecolor='white' , edgecolor='white' , framealpha=0.8)

    ax.semilogx( base=10 )
    ax.set_xlabel( '$k_B T$' )
    ax.set_ylabel( '$C/k_B (T)$' )
    ax.set_xlim([ float( get_tmin( 'param' ) ) , 1e0 ])
    ax.set_ylim([ -0.2 , 0.5 ])


def plotfile( f , steps , eigenvalues , ax , colour=None , mark=None , llabel=None , llinestyle='-' ):
    eigenvalue = 0
    slot = 0

    n_eigenvalues = np.size( eigenvalues[0,:] )
    n_slots = np.size( eigenvalues[:,0] )

    for line in f.readlines():
        if line=='\n' or line=='':
            if eigenvalue==0:
                ax.plot( steps , eigenvalues[:,eigenvalue] , color=colour , 
                    marker=mark , markevery=4 , label=llabel , linestyle=llinestyle )
            else:
                ax.plot( steps , eigenvalues[:,eigenvalue] , color=colour ,
                    marker=mark , markevery=4 , linestyle=llinestyle )
            eigenvalue += 1
            if eigenvalue >= np.size( eigenvalues[0,:] ):
                return
            slot = 0
            continue

        if slot < n_slots:
            eigenvalues[slot,eigenvalue] = line.split(' ')[1]
        slot += 1


def label_flowplot( n_steps , n_eigenvalues , ax ):
    if n_steps%2==0:
        ax.set_xlabel( 'N (even)' , fontsize=15 )
        ax.set_xticks( np.arange( 0 , n_steps , 20 ) )
    else:
        ax.set_xlabel( 'N (odd)' , fontsize=15 )
        ax.set_xticks( np.arange( 5 , n_steps , 20 ) )
    ax.set_ylabel( 'E' , fontsize=15 )


# ARROWFLOWS

def compute_h0_eigenvalues( j ):
    Lambda = get_lambda( 'param' )
    j = 4 * j * ( 1 - Lambda )**-1

    eigs = np.empty( 3 )
    eigs[0] = 0
    eigs[1] = 5.0 / 4.0 * j 
    eigs[2] = 0.5 * j

    return eigs

def read_nrg_eigenvalues():
    N = int( get_N( 'e-q0s1_table1.dat' ) )

    eigenvalues = np.empty( ( N // 2 , 3 ) )

    eigenvalues[ : , 0 ] = get_table1_subspace( 'q0s1' )[:,0]
    eigenvalues[ : , 1 ] = get_table1_subspace( 'q0s3' )[:,0]
    eigenvalues[ : , 2 ]=  get_table1_subspace( 'q1s2' )[:,0]

    return eigenvalues * get_nrg_scale()

def get_table1_subspace( subspace ):
    N = get_N( 'e-q0s1_table1.dat' )

    if subspace=='q0s1':
        q0s1 = np.empty( (int(N/2), 1) )
        f_q0s1 = open( 'e-q0s1_table1.dat' , 'r' )
        count=0
        n=0
        for line in f_q0s1:
            if line=="\n" or line=="":
                count += 1
                n = 0
                continue
            if n >= int(N/2):
                continue
            q0s1[n,count] = line.split()[1]
            n += 1
        f_q0s1.close()
        return q0s1

    if subspace=='q0s3':
        q0s3 = np.empty( ( int(N/2) , 1 ) )
        f_q0s3 = open( 'e-q0s3_table1.dat' , 'r' )
        count = 0
        n = 0
        for line in f_q0s3:
            if line=="\n" or line=="":
                count += 1
                n = 0
                continue
            if n >= int(N/2):
                continue
            q0s3[n,count] = line.split()[1]
            n += 1
        f_q0s3.close()
        return q0s3

    if subspace=='q1s2':
        q1s2 = np.empty( ( int(N/2) , 1 ) )
        f_q1s2 = open( 'e-q1s2_table1.dat' , 'r' )
        count = 0
        n = 0
        for line in f_q1s2:
            if line=="\n" or line=="":
                count += 1
                n = 0
                continue
            if n >= int(N/2):
                continue
            q1s2[n,count] = line.split()[1]
            n += 1
        f_q1s2.close()
        return q1s2

def plot_arrows( N_array , J_array , ax , colour='black' , llabel=0 , multi=False ):
    if llabel==0:
        plt.quiver( J_array[:-1], N_array[:-1], J_array[1:]-J_array[:-1], N_array[1:]-N_array[:-1], \
            scale_units='xy', angles='xy', scale=1, width=0.005, color=colour )
    else:
        plt.quiver( J_array[:-1], N_array[:-1], J_array[1:]-J_array[:-1], N_array[1:]-N_array[:-1], \
            scale_units='xy', angles='xy', scale=1, width=0.005, color=colour )
        plt.plot( N_array[1:] , J_array[1:] , linewidth=1 , color=colour , label=llabel )

    xmin = -0.025
    xmax = 1.8 if multi else 1.4

    ymin = -2
    ymax = N_array[-1] + 2

    ax.set_xlim([ xmin , xmax ])
    ax.set_ylim([ ymin , ymax ])
    
    ax.set_xlabel('$ J_{eff} $')
    ax.set_ylabel('$ N $')

    ax.set_xticks( np.arange( 0 , xmax + 0.1 , 0.1 ) )
    ax.set_yticks( np.arange( 0 , ymax - 2  , 5 ) )
    

def plot_arrow_diagram( ax , colour='black' , llabel=0 , multi=False ):
    N = get_N( 'e-q0s1_table1.dat' )

    nrg_eigenvalues = read_nrg_eigenvalues()

    def F(in_array):
        J = in_array[0]

        analytic_eigenvalues = compute_h0_eigenvalues( J )
        
        return analytic_eigenvalues - nrg_eigenvalues_step

    J_array = np.empty( int(N/2) )

    nrg_eigenvalues_step = np.empty( 3 )
    for n in range( 0 , int(N/2) ):
        nrg_eigenvalues_step = nrg_eigenvalues[ n , : ]

        res = opt.least_squares( F , [0.5] , bounds=( [0] , [50] ) )
        
        
        J_array[n] = nrg_eigenvalues_step[ 1 ]

    N_array = np.arange( 0 , N , 2 )

    if llabel==0:
        plot_arrows( N_array , J_array , ax , colour , multi=multi) 
    else:
        plot_arrows( N_array , J_array , ax , colour , llabel=llabel , multi=multi )
