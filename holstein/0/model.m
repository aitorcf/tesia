def1ch[1];

nph = ToExpression @ optionvalue["Nph"];

H1 = H1 + omega phononnumber[nph] + gep nc[number[d[]]-1, phononplus[nph] + phononminus[nph]];
MAKEPHONON = 1; (* One phonon mode *)

Himp = H1;
Hhyb = Hc;

H = Himp + Hhyb + H0;
