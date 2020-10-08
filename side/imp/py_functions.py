import numpy as np
import matplotlib.pyplot as plt
import math as mt
from matplotlib.colors import Normalize
import matplotlib.cm as cm
from matplotlib.lines import Line2D
import scipy.optimize as opt
import cmath
import os

def write_param(u,gamma,t):
    param = open('param','r')
    newparam = open('newparam','w')
    for line in param:
        if line!="" and line!="\n":
            if line[0]=='U': newparam.write("U={}\n".format(u))                
            elif line[:5]=='Gamma': newparam.write("Gamma={}\n".format(gamma))
            elif line[0]=='t': newparam.write("t={}\n\n".format(t))
            else: newparam.write(line)
    param.close()
    newparam.close()
    os.system('mv newparam param')

def relrange_mask(temp):
    mask = ( (temp>1e-8) & (temp<1e-1) )
    return mask

# BASIC DATA \
# ========== /

def get_data():
    data = np.loadtxt('td_diff.dat')
    temp = data[:,0]
    mag = data[:,1]
    return temp, mag

def get_u_info(temp,mag):
    relmask = relrange_mask(temp)
    mag = mag[relmask]
    temp = temp[relmask]
    u_mask = mag==np.max(mag)
    if mag[u_mask]==mag[0] or mag[u_mask]==mag[-1]:
        return (0,0)
    utemp = float(str(temp[u_mask]).replace('[','').replace(']',''))
    umag = float(str(mag[u_mask]).replace('[','').replace(']',''))
    return (utemp, umag)
    
def get_magmax_point(t,mag,u,gamma):
    mask = ( mag==np.amax(mag) )
    magmax = mag[mask]
    tmax = t[mask]
    umax = u[ int( np.where(t==tmax)[0] / 2 ) ]
    gammamax = gamma[ int( np.where(t==tmax)[0] / 2 ) ]
    return (tmax,magmax,umax,gammamax)


#  CHECKING  ||
#  ========  ||

def is_folm(temp,der1):
    der1_masked = der1[ relrange_mask(temp) ]
    if np.any( der1_masked < 0 ): return True
    else: return False


def is_fo(y,der1,der2):
    if np.any(der1<0) or np.all(y==0): return True
    elif np.all(der1>=0) and np.any(der2<0): return True
    else: return False


def is_lm(y):
    if np.any(y>0.125): return True
    else: return False


def is_sc(y):
    if np.any(y<0.125): return True
    else: return False



# MAGNETIC SUSCEPTIBILITY PLOT
# ============================

def plot_mag_susc(ax):
    td_data = np.loadtxt('td_diff.dat')
    mag_susc = td_data[:,1]
    temp = td_data[:,0]
    fo = np.zeros((len(temp)))
    lm = np.zeros((len(temp)))
    
    lm[:] = 0.25
    fo[:] = 0.125
    
    ax.plot(temp,mag_susc,label='impurity magnetic susceptibility', color='blue' , linewidth=2 , linestyle='-')
    #ax.plot(temp, lm, color='red', linestyle='--' , label="local moment")
    #ax.plot(temp, fo, color='green' , linestyle='--' , label="free orbital")

    ax.legend( loc='upper left' , frameon=True , facecolor='white' , edgecolor='white' , framealpha=0.8)

    ax.semilogx(base=10)
    ax.set_xlabel('$k_b T$')
    ax.set_ylabel('$k_b T \chi (T)$')
    ax.set_xlim([1e-10,1e0])
    ax.set_ylim([0,1.0])


def plot_fo_and_lm(temp):
    fo = np.empty(temp.size)
    lm = np.empty(temp.size)
    fo[:] = 0.125
    lm[:] = 0.25
    plt.plot(temp,fo,linestyle='--',color='grey')
    plt.plot(temp,lm,linestyle='--',color='grey')

# ARROW FLOWS
# ===========

def get_u_gamma():
    param = open('param','r')
    for line in param:
        if line!="" and line!="\n":
            if line[0]=='U':
                U = float( line.strip()[2:] )
            elif line[:5]=='Gamma':
                GAMMA = float( line.strip()[6:] )
                param.close()
                return (U,GAMMA)


def get_N(filename):
    f = open(filename,'r')
    i = 0
    for line in f:
        if line=="\n" or line=="":
            return i*2 - 1
        i += 1


def get_lambda():
    param = open('param','r')
    for line in param:
        if line!="" and line!="\n":
            if line[:6]=='Lambda':
                return float( line.strip()[7:] ) 


def get_table1_subspace(subspace,N):
    if subspace=='q0s1':
        q0s1 = np.empty( (3,int(N/2)) )
        f_q0s1 = open('e-q0s1_table1.dat','r')
        count=0
        n=0
        for line in f_q0s1:
            if line=="\n" or line=="":
                count += 1
                n = 0
                continue
            if n >= int(N/2):
                continue
            q0s1[count,n] = line.split()[1]
            n += 1
        f_q0s1.close()
        return q0s1

    if subspace=='q0s3':
        q0s3 = np.empty( (1,int(N/2)) )
        f_q0s3 = open('e-q0s3_table1.dat','r')
        count=0
        n=0
        for line in f_q0s3:
            if line=="\n" or line=="":
                count += 1
                n = 0
                continue
            if n >= int(N/2):
                continue
            q0s3[count,n] = line.split()[1]
            n += 1
        f_q0s3.close()
        return q0s3

    if subspace=='q1s2':
        q1s2 = np.empty( (2,int(N/2)) )
        f_q1s2 = open('e-q1s2_table1.dat','r')
        count=0
        n=0
        for line in f_q1s2:
            if line=="\n" or line=="":
                count += 1
                n = 0
                continue
            if n >= int(N/2):
                continue
            q1s2[count,n] = line.split()[1]
            n += 1
        f_q1s2.close()
        return q1s2

    if subspace=='q2s1':
        q2s1 = np.empty( (1,int(N/2)) )
        f_q2s1 = open('e-q2s1_table1.dat','r')
        count=0
        n=0
        for line in f_q2s1:
            if line=="\n" or line=="":
                count += 1
                n = 0
                continue
            if n >= int(N/2):
                continue
            q2s1[count,n] = line.split()[1]
            n += 1
        f_q2s1.close()
        return q2s1


def include_fixedpoints(ax,**kwargs):
    colors = False
    if 'colors' in kwargs:
        colors = kwargs['colors']    
    if colors:
        ax.plot(0,0,marker='*',markersize=5,color='blue')
        ax.plot(0,2.75,marker='*',markersize=5,color='red')
        ax.plot(0.76,0.0,marker='*',markersize=5,color='green')
    else:
        ax.plot(0,0,marker='*',markersize=5,color='black')
        ax.plot(0,2.75,marker='*',markersize=5,color='black')
        ax.plot(0.76,0.0,marker='*',markersize=5,color='black')
    ax.set_xlim([-0.05,0.8])
    ax.set_ylim([-0.2,3.0])
    ax.annotate('$H_{FO}$',(-0.047,-0.15))
    ax.annotate('$H_{LM}$',(-0.047,2.8))
    ax.annotate('$H_{SC}$',(0.75,-0.15))


def plot_arrows_black(U_array,GAMMA_array,ax,**kwargs):
    if 'color' in kwargs:
        plt.quiver(GAMMA_array[:-1], U_array[:-1], GAMMA_array[1:]-GAMMA_array[:-1], U_array[1:]-U_array[:-1], \
            scale_units='xy', angles='xy', scale=1, width=0.005, color=kwargs['color'])
    else:
        plt.quiver(GAMMA_array[:-1], U_array[:-1], GAMMA_array[1:]-GAMMA_array[:-1], U_array[1:]-U_array[:-1], \
            scale_units='xy', angles='xy', scale=1, width=0.005)
    ax.set_xlabel('$ \Gamma_{eff} $')
    ax.set_ylabel('$ U_{eff} $')
    ax.set_xlim([-0.025,1.0])
    ax.set_ylim([-0.1,3.0])
    ax.set_xticks( np.arange(0,1.1,0.2) )
    ax.set_yticks( np.arange(0,3.1,0.5) )
    if 'fixedpoints' in kwargs and kwargs['fixedpoints']==True:
        include_fixedpoints(ax)


def plot_arrows_colors(U_array,GAMMA_array,ax,**kwargs):
    x = GAMMA_array[:-1]
    y = U_array[:-1]
    u = GAMMA_array[1:]-GAMMA_array[:-1]
    v = U_array[1:]-U_array[:-1]
    x_scaled = x / 0.76
    y_scaled = y / 2.75
    colors = (1 - y_scaled) * np.sign(y_scaled + x/0.4 - 1)
    norm = Normalize()
    norm.autoscale(np.array([-1,1]))
    colormap = cm.brg
    ax.quiver(x, y, u, v, scale_units='xy', angles='xy', scale=1, width=0.005, color=colormap(norm(colors)))
    ax.set_xlabel('$ \Gamma_{eff} $')
    ax.set_ylabel("$ U_{eff} $")
    ax.set_xlim([-0.025,0.8])
    ax.set_ylim([-0.05,3.0])
    ax.set_xticks( np.arange(0,1.1,0.2) )
    ax.set_yticks( np.arange(0,3.1,0.5) )
    custom_lines = [Line2D([0], [0], color=colormap(0.), lw=2),
                    Line2D([0], [0], color=colormap(.5), lw=2),
                    Line2D([0], [0], color=colormap(1.), lw=2)]
    ax.legend(custom_lines, ['FO', 'LM', 'SC'], \
            loc="upper right",frameon=True,framealpha=0.7,facecolor='white',edgecolor='white')
    if 'fixedpoints' in kwargs and kwargs['fixedpoints']==True:
        include_fixedpoints(ax,colors=True)


def get_UGAMMA(q0s1,q1s2,q0s3,q2s1,N,U_local,GAMMA_local):
    num_value = np.empty( 7 )
    for n in range(0,int(N/2)):
        num_value[0] = q0s1[0,n]
        num_value[1] = q1s2[0,n]
        num_value[2] = q0s3[0,n]
        num_value[3] = q0s1[1,n]
        num_value[4] = q2s1[0,n]
        num_value[5] = q1s2[1,n]
        num_value[6] = q0s1[2,n]

        res = opt.least_squares(F,[0.3,0.7])
        U_local[n] = res.x[0]
        GAMMA_local[n] = res.x[1]
    
    Lambda = get_lambda()
    U_local = U_local * (1+Lambda**(-1))
    Gamma_local = Gamma_local * mt.pi * ( (1+Lambda**(-1)) / 2 )**2 / 8.0

    return (U_local,GAMMA_local)


def rescale_u_gamma(uu,gg):
    Lambda = get_lambda()
    uu = uu * ( 1 + Lambda**(-1) )
    gg = gg * mt.pi * ( 1 + Lambda**(-1) )**2 / 8.0
    return (uu,gg)


def compute_subspace_eigenvalues(U,GAMMA,Q,S):
    if (Q,S)==(-2,1):
        a = 0.5*( U**2 + 16*GAMMA )**0.5 + 0.5*U
        return a
    elif (Q,S)==(-1,2):
        b = 0.5*( U**2 + 16*GAMMA )**0.5 - 0.5*( U**2 + 4*GAMMA )**0.5
        c = 0.5*( U**2 + 16*GAMMA )**0.5 + 0.5*( U**2 + 4*GAMMA )**0.5
        return (b,c)
    elif (Q,S)==(0,1):
        d = 0
        e = 0.5*( U**2 + 16*GAMMA )**0.5 + 0.5*U
        f = ( U**2 + 16*GAMMA )**0.5
        return (d,e,f)
    elif (Q,S)==(0,3):
        g = 0.5*( U**2 + 16*GAMMA )**0.5 - 0.5*U
        return g
    elif (Q,S)==(1,2):
        h = 0.5*( U**2 + 16*GAMMA )**0.5 - 0.5*( U**2 + 4*GAMMA )**0.5
        i = 0.5*( U**2 + 16*GAMMA )**0.5 + 0.5*( U**2 + 4*GAMMA )**0.5
        return (h,i)
    elif (Q,S)==(2,1):
        j = 0.5*( U**2 + 16*GAMMA )**0.5 + 0.5*U
        return j

# EIGENALUE GRID ||
# ============== ||

def compute_all_eigenvalues(U,GAMMA):

    a = 0.5*( U**2 + 16*GAMMA )**0.5 + 0.5*U

    b = 0.5*( U**2 + 16*GAMMA )**0.5 - 0.5*( U**2 + 4*GAMMA )**0.5
    c = 0.5*( U**2 + 16*GAMMA )**0.5 + 0.5*( U**2 + 4*GAMMA )**0.5

    d = 0
    e = 0.5*( U**2 + 16*GAMMA )**0.5 + 0.5*U
    f = 0.5*( U**2 + 16*GAMMA )**0.5
    
    g = 0.5*( U**2 + 16*GAMMA )**0.5 - 0.5*U

    h = 0.5*( U**2 + 16*GAMMA )**0.5 - 0.5*( U**2 + 4*GAMMA )**0.5
    i = 0.5*( U**2 + 16*GAMMA )**0.5 + 0.5*( U**2 + 4*GAMMA )**0.5

    j = a = 0.5*( U**2 + 16*GAMMA )**0.5 + 0.5*U

    eigenvalues = sorted([a,b,c,d,e,f,g,h,i,j])
    return eigenvalues

def effectives_from_1_2_eigenvalues(eigenvalues):
    eigenvalues = sorted(eigenvalues,key=float)
    U = (2.0/mt.sqrt(3)) * abs( eigenvalues[0] - eigenvalues[1] )
    GAMMA = eigenvalues[0] * eigenvalues[1] / 3.0
    return (U,GAMMA)

# EIGENFLOWS ||
# ======== ||

def plotfile(f,steps,eigenvalues,ax,**kwargs):
    eigenvalue = 0
    slot = 0
    n_eigenvalues = np.size(eigenvalues[0,:])
    n_slots = np.size(eigenvalues[:,0])
    for line in f.readlines():
        if line=='\n' or line=='':
            if 'color' in kwargs and 'linestyle' in kwargs:
                line, = ax.plot(steps,eigenvalues[:,eigenvalue],color=kwargs['color'],linestyle=kwargs['linestyle'])
            elif 'color' in kwargs:
                line, = ax.plot(steps,eigenvalues[:,eigenvalue],color=kwargs['color'])
            elif 'linestyle' in kwargs:
                line, = ax.plot(steps,eigenvalues[:,eigenvalue],linestyle=kwargs['linestyle'])
            else:
                line, = ax.plot(steps,eigenvalues[:,eigenvalue])
            eigenvalue += 1
            if eigenvalue>=np.size(eigenvalues[0,:]): 
                if 'label' in kwargs:
                    line.set_label(kwargs['label'])
                return
            slot = 0
            continue        
        if slot<n_slots:
            eigenvalues[slot,eigenvalue] = line.split(' ')[1]
        slot += 1   

def label_flowplot(n_steps,n_eigenvalues,ax):
    if n_steps%2==0:
        ax.set_xlabel('N (even)')
        ax.set_xticks(np.arange(0,n_steps,10))
    else:
        ax.set_xlabel('N (odd)')
        ax.set_xticks(np.arange(5,n_steps,10))
    ax.set_ylabel('E/D (renormalized)')





# OPTIMIZATION
# ============

def F(in_array):
    U = in_array[0]
    GAMMA = in_array[1]

    my_q0s1 = compute_subspace_eigenvalues(U,GAMMA,0,1) 
    my_q0s3 = compute_subspace_eigenvalues(U,GAMMA,0,3)
    my_q1s2 = compute_subspace_eigenvalues(U,GAMMA,1,2)
    my_q2s1 = compute_subspace_eigenvalues(U,GAMMA,2,1)

    out_array = np.empty( (7) )
    
    out_array[0] = my_q0s1[0] - num_value[0]
    out_array[1] = my_q1s2[0] - num_value[1]
    out_array[2] = my_q0s3 - num_value[2]
    out_array[3] = my_q0s1[1] - num_value[3]
    out_array[4] = my_q2s1 - num_value[4]
    out_array[5] = my_q1s2[1] - num_value[5]
    out_array[6] = my_q0s1[2] - num_value[6]

    return out_array

