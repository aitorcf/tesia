from .State import State 

class Ket( State ):
    def __init__( self , space_name , occupation , coefficient=1 ):
        self.space = space_name
        self.occupation = occupation
        self.graph = gen_graph( space_name , coefficient , occupation )
        self.coeff = coefficient

def gen_graph( space_name , coefficient , occupation ):
    occupationstring = ' , '.join( occupation ) 
    return f'{coefficient} | [{space_name}] {occupationstring} >'