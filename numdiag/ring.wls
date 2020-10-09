#!/usr/bin/env wolframscript
(* ::Package:: *)

<<sneg`sneg`;

Import["/home/aitor/tesia/sneg/diagonalize.m"];

snegfermionoperators[a,d,f];
snegrealconstants[\[Gamma],u];

Hd=u pow[number[d[]]-1,2];
Ha=u pow[number[a[]]-1,2];

Hdc=Sqrt[\[Gamma]] hop[d[],f[0]];
Hac=Sqrt[\[Gamma]] hop[a[],f[0]];

H=Hd+Ha+Hdc+Hac;


basisops={a[],d[],f[0]};

diagSetupBasisQS[];
diagSetupHam[];


argv=Table[ToExpression@$ScriptCommandLine[[i]],{i,2,Length@$ScriptCommandLine}];Print[argv[[1]]+argv[[2]]]

diagonalize[{u->u,\[Gamma]->\[Gamma]}];


eigenvalues=eig2[[All,2,1]]/.{u->N[argv[[1]]],\[Gamma]->N[argv[[2]]]}
eigenvalues=eigenvalues-Min@eigenvalues

s=OpenWrite["/home/aitor/tesia/numdiag/eigenvalues.dat"]

n=Length[eigenvalues];
n0=QuotientRemainder[n,2][[1]];

Do[
	{Do[
		Write[s,eigenvalues[[i,j]]],
	{j,Length[eigenvalues[[i]]]}],
	WriteLine[s,""]},
{i,n0,n}]

Close[s]
