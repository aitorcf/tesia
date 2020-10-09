(* Content-type: application/vnd.wolfram.mathematica *)

(*** Wolfram Notebook File ***)
(* http://www.wolfram.com/nb *)

(* CreatedBy='Mathematica 12.1' *)

(*CacheID: 234*)
(* Internal cache information:
NotebookFileLineBreakTest
NotebookFileLineBreakTest
NotebookDataPosition[       158,          7]
NotebookDataLength[    562745,      13103]
NotebookOptionsPosition[    559165,      13032]
NotebookOutlinePosition[    559590,      13049]
CellTagsIndexPosition[    559547,      13046]
WindowFrame->Normal*)

(* Beginning of Notebook Content *)
Notebook[{

Cell[CellGroupData[{
Cell[BoxData[{
 RowBox[{
  RowBox[{
   RowBox[{"<<", "sneg`sneg`"}], ";"}], 
  "\[IndentingNewLine]"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
   RowBox[{"Import", "[", "\"\</home/aitor/nrg/sneg/diagonalize.m\>\"", "]"}],
    ";"}], "\[IndentingNewLine]"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"snegfermionoperators", "[", 
   RowBox[{"a", ",", "d", ",", "f"}], "]"}], ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
   RowBox[{"snegrealconstants", "[", 
    RowBox[{"\[CapitalGamma]", ",", "U", ",", "\[Gamma]", ",", "u"}], "]"}], 
   ";"}], "\[IndentingNewLine]"}], "\[IndentingNewLine]"}], "Input",
 CellChangeTimes->{{3.798809025691039*^9, 3.798809226292645*^9}, {
   3.798809276126196*^9, 3.798809315388329*^9}, {3.79881124802798*^9, 
   3.79881126551714*^9}, 3.798863477119495*^9, {3.798864450759946*^9, 
   3.7988644849316063`*^9}, {3.798864551828703*^9, 3.7988645675801897`*^9}, 
   3.798873884674965*^9, {3.798874740195589*^9, 3.7988747406789913`*^9}, 
   3.799059586981381*^9, {3.8000070089721212`*^9, 3.800007013553955*^9}, {
   3.8017309436693983`*^9, 3.801730943722653*^9}, {3.801740057597581*^9, 
   3.8017400586090937`*^9}},
 CellLabel->"In[1]:=",ExpressionUUID->"878ff729-664b-4665-a6dd-25a23383ad8a"],

Cell[BoxData["\<\"sneg 1.250 Copyright (C) 2016 Rok Zitko\"\>"], "Print",
 CellChangeTimes->{
  3.798864567966158*^9, 3.798864879470083*^9, 3.79887388647295*^9, 
   3.7988747503178177`*^9, {3.798875801333747*^9, 3.7988758090740623`*^9}, 
   3.799040506266487*^9, {3.7990439865877438`*^9, 3.799043990417859*^9}, 
   3.799059595064784*^9, 3.799418014453597*^9, 3.79948094535912*^9, 
   3.799491967700028*^9, 3.7995109167800837`*^9, 3.7999891776879797`*^9, {
   3.8000069877002163`*^9, 3.8000070164305677`*^9}, 3.801730957130149*^9, 
   3.801740064188774*^9, {3.8017432752878857`*^9, 3.801743288391253*^9}, 
   3.8017434321475058`*^9},
 CellLabel->
  "During evaluation of \
In[1]:=",ExpressionUUID->"9a65167d-d0c7-476d-989c-1f9b7a985287"]
}, Open  ]],

Cell[CellGroupData[{

Cell[BoxData[
 RowBox[{"Hdc", "=", 
  RowBox[{
   RowBox[{"Sqrt", "[", "\[Gamma]", "]"}], " ", 
   RowBox[{"hop", "[", 
    RowBox[{
     RowBox[{"d", "[", "]"}], ",", 
     RowBox[{"f", "[", "0", "]"}]}], "]"}]}]}]], "Input",
 CellChangeTimes->{
  3.798809441567727*^9, 3.798809533266508*^9, 3.7988644609380817`*^9, 
   3.798864659054631*^9, {3.798873891607889*^9, 3.798873904536191*^9}, {
   3.798874682186511*^9, 3.798874689004195*^9}, {3.798874744235691*^9, 
   3.798874746393159*^9}, {3.798875071361195*^9, 3.798875087351549*^9}, {
   3.798875784967868*^9, 3.7988757952009077`*^9}, 3.79904393075603*^9, 
   3.799043976156892*^9, {3.800007036440886*^9, 3.800007039047998*^9}, {
   3.801730953391808*^9, 3.8017309534279337`*^9}, {3.801743211729753*^9, 
   3.801743213677927*^9}},
 CellLabel->"In[5]:=",ExpressionUUID->"56fc288d-44db-4702-8652-34188f9a12a9"],

Cell[BoxData[
 RowBox[{
  SqrtBox["\[Gamma]"], " ", 
  RowBox[{"(", 
   RowBox[{
    RowBox[{
     TagBox[
      StyleBox[
       TemplateBox[{"d", 
         RowBox[{
           TagBox[
            StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
         "\"\[Dagger]\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm], 
     StyleBox["\[CenterDot]",
      FontColor->RGBColor[0, 1, 0]], 
     TagBox[
      StyleBox[
       TemplateBox[{"f", 
         RowBox[{"0", 
           TagBox[
            StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], "\"\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm]}], "+", 
    RowBox[{
     TagBox[
      StyleBox[
       TemplateBox[{"d", 
         RowBox[{
           TagBox[
            StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
         "\"\[Dagger]\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm], 
     StyleBox["\[CenterDot]",
      FontColor->RGBColor[0, 1, 0]], 
     TagBox[
      StyleBox[
       TemplateBox[{"f", 
         RowBox[{"0", 
           TagBox[
            StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], "\"\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm]}], "+", 
    RowBox[{
     TagBox[
      StyleBox[
       TemplateBox[{"f", 
         RowBox[{"0", 
           TagBox[
            StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
         "\"\[Dagger]\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm], 
     StyleBox["\[CenterDot]",
      FontColor->RGBColor[0, 1, 0]], 
     TagBox[
      StyleBox[
       TemplateBox[{"d", 
         RowBox[{
           TagBox[
            StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], "\"\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm]}], "+", 
    RowBox[{
     TagBox[
      StyleBox[
       TemplateBox[{"f", 
         RowBox[{"0", 
           TagBox[
            StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
         "\"\[Dagger]\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm], 
     StyleBox["\[CenterDot]",
      FontColor->RGBColor[0, 1, 0]], 
     TagBox[
      StyleBox[
       TemplateBox[{"d", 
         RowBox[{
           TagBox[
            StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], "\"\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm]}]}], ")"}]}]], "Output",
 CellChangeTimes->{
  3.7988758417385073`*^9, 3.799040507332892*^9, {3.799043982988624*^9, 
   3.799043992904001*^9}, 3.79905959740828*^9, 3.7994180161708717`*^9, 
   3.7994809483340816`*^9, 3.79949196924825*^9, 3.799510917524213*^9, 
   3.7999891784760723`*^9, 3.800006989548629*^9, 3.800007040097054*^9, 
   3.80173096039296*^9, 3.801740068830633*^9, 3.801743216551551*^9, {
   3.801743267162969*^9, 3.801743293092698*^9}, 3.801743436461382*^9},
 CellLabel->"Out[5]=",ExpressionUUID->"df5dbee9-af42-44a3-a5af-a74f530f0314"]
}, Open  ]],

Cell[CellGroupData[{

Cell[BoxData[
 RowBox[{"Hd", "=", " ", 
  RowBox[{"u", " ", 
   RowBox[{"pow", "[", 
    RowBox[{
     RowBox[{
      RowBox[{"number", "[", 
       RowBox[{"d", "[", "]"}], "]"}], "-", "1"}], ",", "2"}], 
    "]"}]}]}]], "Input",
 CellChangeTimes->{{3.7988093268923807`*^9, 3.798809382914631*^9}, {
  3.798863620398287*^9, 3.798863628973897*^9}, {3.798864283162362*^9, 
  3.798864290754953*^9}, {3.798864355159173*^9, 3.798864370999009*^9}, {
  3.798864577472371*^9, 3.798864578921503*^9}, {3.798873873150549*^9, 
  3.7988738782322474`*^9}, {3.79887391925173*^9, 3.798873925249795*^9}, {
  3.798873972708769*^9, 3.7988739873286467`*^9}, {3.798874476799418*^9, 
  3.798874502960753*^9}, {3.798874673625238*^9, 3.798874769289359*^9}, {
  3.798874956425242*^9, 3.798874969987898*^9}, {3.798875821099927*^9, 
  3.798875825332263*^9}, {3.800007045160137*^9, 3.800007045444799*^9}, {
  3.801730963412525*^9, 3.8017309640140963`*^9}, {3.801743220386518*^9, 
  3.801743221218646*^9}},
 CellLabel->"In[6]:=",ExpressionUUID->"5de1ba86-dfaf-4e3d-ae28-09be0688a46d"],

Cell[BoxData[
 RowBox[{"u", " ", 
  RowBox[{"(", 
   RowBox[{"1", "-", 
    RowBox[{
     TagBox[
      StyleBox[
       TemplateBox[{"d", 
         RowBox[{
           TagBox[
            StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
         "\"\[Dagger]\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm], 
     StyleBox["\[CenterDot]",
      FontColor->RGBColor[0, 1, 0]], 
     TagBox[
      StyleBox[
       TemplateBox[{"d", 
         RowBox[{
           TagBox[
            StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], "\"\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm]}], "-", 
    RowBox[{
     TagBox[
      StyleBox[
       TemplateBox[{"d", 
         RowBox[{
           TagBox[
            StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
         "\"\[Dagger]\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm], 
     StyleBox["\[CenterDot]",
      FontColor->RGBColor[0, 1, 0]], 
     TagBox[
      StyleBox[
       TemplateBox[{"d", 
         RowBox[{
           TagBox[
            StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], "\"\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm]}], "-", 
    RowBox[{"2", " ", 
     RowBox[{
      TagBox[
       StyleBox[
        TemplateBox[{"d", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
          "\"\[Dagger]\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"d", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]],
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
          "\"\[Dagger]\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"d", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], "\"\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"d", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]],
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], "\"\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm]}]}]}], ")"}]}]], "Output",
 CellChangeTimes->{
  3.798809383628934*^9, 3.798863624001973*^9, 3.7988642923291817`*^9, {
   3.7988643583861094`*^9, 3.798864368158989*^9}, {3.798864573601501*^9, 
   3.798864579959406*^9}, 3.798864879872031*^9, 3.798873925892015*^9, 
   3.7988739932919416`*^9, 3.7988747711058817`*^9, 3.798874973568016*^9, {
   3.798875817506042*^9, 3.798875829450656*^9}, 3.799040507372594*^9, 
   3.799043995405343*^9, 3.799418016219777*^9, 3.7994809484024487`*^9, 
   3.7994919692936993`*^9, 3.799510917577993*^9, 3.799989178545692*^9, 
   3.800006989640609*^9, 3.8000070467562304`*^9, 3.801730964399171*^9, 
   3.801743439151079*^9},
 CellLabel->"Out[6]=",ExpressionUUID->"2f7041f8-0ce9-4d3e-b494-acbf0689790f"]
}, Open  ]],

Cell[CellGroupData[{

Cell[BoxData[
 RowBox[{"Ha", " ", "=", 
  RowBox[{"u", " ", 
   RowBox[{"pow", "[", 
    RowBox[{
     RowBox[{
      RowBox[{"number", "[", 
       RowBox[{"a", "[", "]"}], "]"}], "-", "1"}], ",", "2"}], 
    "]"}]}]}]], "Input",
 CellChangeTimes->{{3.8017432275239058`*^9, 3.801743243119622*^9}},
 CellLabel->"In[7]:=",ExpressionUUID->"817faa84-b2a2-400a-b9a2-2b2cd40b9499"],

Cell[BoxData[
 RowBox[{"u", " ", 
  RowBox[{"(", 
   RowBox[{"1", "-", 
    RowBox[{
     TagBox[
      StyleBox[
       TemplateBox[{"a", 
         RowBox[{
           TagBox[
            StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
         "\"\[Dagger]\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm], 
     StyleBox["\[CenterDot]",
      FontColor->RGBColor[0, 1, 0]], 
     TagBox[
      StyleBox[
       TemplateBox[{"a", 
         RowBox[{
           TagBox[
            StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], "\"\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm]}], "-", 
    RowBox[{
     TagBox[
      StyleBox[
       TemplateBox[{"a", 
         RowBox[{
           TagBox[
            StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
         "\"\[Dagger]\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm], 
     StyleBox["\[CenterDot]",
      FontColor->RGBColor[0, 1, 0]], 
     TagBox[
      StyleBox[
       TemplateBox[{"a", 
         RowBox[{
           TagBox[
            StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], "\"\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm]}], "-", 
    RowBox[{"2", " ", 
     RowBox[{
      TagBox[
       StyleBox[
        TemplateBox[{"a", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
          "\"\[Dagger]\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"a", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]],
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
          "\"\[Dagger]\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"a", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], "\"\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"a", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]],
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], "\"\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm]}]}]}], ")"}]}]], "Output",
 CellChangeTimes->{3.8017432451101103`*^9, 3.8017434411651154`*^9},
 CellLabel->"Out[7]=",ExpressionUUID->"ba78cd25-194a-45fc-a553-d654b2de3e5c"]
}, Open  ]],

Cell[CellGroupData[{

Cell[BoxData[
 RowBox[{"Hac", "=", 
  RowBox[{
   RowBox[{"Sqrt", "[", "\[Gamma]", "]"}], " ", 
   RowBox[{"hop", "[", 
    RowBox[{
     RowBox[{"a", "[", "]"}], ",", 
     RowBox[{"f", "[", "0", "]"}]}], "]"}]}]}]], "Input",
 CellChangeTimes->{{3.80174324684379*^9, 3.8017432577733097`*^9}},
 CellLabel->"In[8]:=",ExpressionUUID->"1cff3dbe-d3aa-48ab-bb70-9cb5c9380ed4"],

Cell[BoxData[
 RowBox[{
  SqrtBox["\[Gamma]"], " ", 
  RowBox[{"(", 
   RowBox[{
    RowBox[{
     TagBox[
      StyleBox[
       TemplateBox[{"a", 
         RowBox[{
           TagBox[
            StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
         "\"\[Dagger]\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm], 
     StyleBox["\[CenterDot]",
      FontColor->RGBColor[0, 1, 0]], 
     TagBox[
      StyleBox[
       TemplateBox[{"f", 
         RowBox[{"0", 
           TagBox[
            StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], "\"\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm]}], "+", 
    RowBox[{
     TagBox[
      StyleBox[
       TemplateBox[{"a", 
         RowBox[{
           TagBox[
            StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
         "\"\[Dagger]\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm], 
     StyleBox["\[CenterDot]",
      FontColor->RGBColor[0, 1, 0]], 
     TagBox[
      StyleBox[
       TemplateBox[{"f", 
         RowBox[{"0", 
           TagBox[
            StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], "\"\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm]}], "+", 
    RowBox[{
     TagBox[
      StyleBox[
       TemplateBox[{"f", 
         RowBox[{"0", 
           TagBox[
            StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
         "\"\[Dagger]\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm], 
     StyleBox["\[CenterDot]",
      FontColor->RGBColor[0, 1, 0]], 
     TagBox[
      StyleBox[
       TemplateBox[{"a", 
         RowBox[{
           TagBox[
            StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], "\"\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm]}], "+", 
    RowBox[{
     TagBox[
      StyleBox[
       TemplateBox[{"f", 
         RowBox[{"0", 
           TagBox[
            StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
         "\"\[Dagger]\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm], 
     StyleBox["\[CenterDot]",
      FontColor->RGBColor[0, 1, 0]], 
     TagBox[
      StyleBox[
       TemplateBox[{"a", 
         RowBox[{
           TagBox[
            StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], "\"\""},
        "Subsuperscript"],
       ScriptSizeMultipliers->1,
       ScriptBaselineShifts->{1, 1}],
      DisplayForm]}]}], ")"}]}]], "Output",
 CellChangeTimes->{3.801743259243507*^9, 3.8017434430154657`*^9},
 CellLabel->"Out[8]=",ExpressionUUID->"9f4b64b5-0658-48c9-a9e1-bb7e896af065"]
}, Open  ]],

Cell[CellGroupData[{

Cell[BoxData[
 RowBox[{"H", "=", 
  RowBox[{"Hd", "+", "Ha", "+", "Hdc", "+", "Hac"}]}]], "Input",
 CellChangeTimes->{{3.798809387235297*^9, 3.798809393633107*^9}, {
  3.7988747801563787`*^9, 3.79887478063313*^9}, {3.799043916598795*^9, 
  3.799043924324622*^9}, {3.801743446282385*^9, 3.801743451825201*^9}},
 CellLabel->"In[9]:=",ExpressionUUID->"ffa6547e-d552-4139-b069-f1dda5501407"],

Cell[BoxData[
 RowBox[{
  RowBox[{
   SqrtBox["\[Gamma]"], " ", 
   RowBox[{"(", 
    RowBox[{
     RowBox[{
      TagBox[
       StyleBox[
        TemplateBox[{"a", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
          "\"\[Dagger]\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"f", 
          RowBox[{"0", 
            TagBox[
             StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], "\"\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm]}], "+", 
     RowBox[{
      TagBox[
       StyleBox[
        TemplateBox[{"a", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]],
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
          "\"\[Dagger]\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"f", 
          RowBox[{"0", 
            TagBox[
             StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]],
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], "\"\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm]}], "+", 
     RowBox[{
      TagBox[
       StyleBox[
        TemplateBox[{"f", 
          RowBox[{"0", 
            TagBox[
             StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
          "\"\[Dagger]\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"a", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], "\"\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm]}], "+", 
     RowBox[{
      TagBox[
       StyleBox[
        TemplateBox[{"f", 
          RowBox[{"0", 
            TagBox[
             StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]],
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
          "\"\[Dagger]\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"a", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]],
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], "\"\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm]}]}], ")"}]}], "+", 
  RowBox[{
   SqrtBox["\[Gamma]"], " ", 
   RowBox[{"(", 
    RowBox[{
     RowBox[{
      TagBox[
       StyleBox[
        TemplateBox[{"d", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
          "\"\[Dagger]\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"f", 
          RowBox[{"0", 
            TagBox[
             StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], "\"\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm]}], "+", 
     RowBox[{
      TagBox[
       StyleBox[
        TemplateBox[{"d", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]],
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
          "\"\[Dagger]\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"f", 
          RowBox[{"0", 
            TagBox[
             StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]],
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], "\"\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm]}], "+", 
     RowBox[{
      TagBox[
       StyleBox[
        TemplateBox[{"f", 
          RowBox[{"0", 
            TagBox[
             StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
          "\"\[Dagger]\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"d", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], "\"\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm]}], "+", 
     RowBox[{
      TagBox[
       StyleBox[
        TemplateBox[{"f", 
          RowBox[{"0", 
            TagBox[
             StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]],
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
          "\"\[Dagger]\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"d", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]],
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], "\"\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm]}]}], ")"}]}], "+", 
  RowBox[{"u", " ", 
   RowBox[{"(", 
    RowBox[{"1", "-", 
     RowBox[{
      TagBox[
       StyleBox[
        TemplateBox[{"a", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
          "\"\[Dagger]\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"a", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], "\"\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm]}], "-", 
     RowBox[{
      TagBox[
       StyleBox[
        TemplateBox[{"a", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]],
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
          "\"\[Dagger]\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"a", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]],
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], "\"\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm]}], "-", 
     RowBox[{"2", " ", 
      RowBox[{
       TagBox[
        StyleBox[
         TemplateBox[{"a", 
           RowBox[{
             TagBox[
              StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
              StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
           "\"\[Dagger]\""},
          "Subsuperscript"],
         ScriptSizeMultipliers->1,
         ScriptBaselineShifts->{1, 1}],
        DisplayForm], 
       StyleBox["\[CenterDot]",
        FontColor->RGBColor[0, 1, 0]], 
       TagBox[
        StyleBox[
         TemplateBox[{"a", 
           RowBox[{
             TagBox[
              StyleBox[
              "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
           "\"\[Dagger]\""},
          "Subsuperscript"],
         ScriptSizeMultipliers->1,
         ScriptBaselineShifts->{1, 1}],
        DisplayForm], 
       StyleBox["\[CenterDot]",
        FontColor->RGBColor[0, 1, 0]], 
       TagBox[
        StyleBox[
         TemplateBox[{"a", 
           RowBox[{
             TagBox[
              StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
              StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], "\"\""},
          "Subsuperscript"],
         ScriptSizeMultipliers->1,
         ScriptBaselineShifts->{1, 1}],
        DisplayForm], 
       StyleBox["\[CenterDot]",
        FontColor->RGBColor[0, 1, 0]], 
       TagBox[
        StyleBox[
         TemplateBox[{"a", 
           RowBox[{
             TagBox[
              StyleBox[
              "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], "\"\""},
          "Subsuperscript"],
         ScriptSizeMultipliers->1,
         ScriptBaselineShifts->{1, 1}],
        DisplayForm]}]}]}], ")"}]}], "+", 
  RowBox[{"u", " ", 
   RowBox[{"(", 
    RowBox[{"1", "-", 
     RowBox[{
      TagBox[
       StyleBox[
        TemplateBox[{"d", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
          "\"\[Dagger]\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"d", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], "\"\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm]}], "-", 
     RowBox[{
      TagBox[
       StyleBox[
        TemplateBox[{"d", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]],
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
          "\"\[Dagger]\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm], 
      StyleBox["\[CenterDot]",
       FontColor->RGBColor[0, 1, 0]], 
      TagBox[
       StyleBox[
        TemplateBox[{"d", 
          RowBox[{
            TagBox[
             StyleBox["\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]],
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], "\"\""},
         "Subsuperscript"],
        ScriptSizeMultipliers->1,
        ScriptBaselineShifts->{1, 1}],
       DisplayForm]}], "-", 
     RowBox[{"2", " ", 
      RowBox[{
       TagBox[
        StyleBox[
         TemplateBox[{"d", 
           RowBox[{
             TagBox[
              StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
              StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
           "\"\[Dagger]\""},
          "Subsuperscript"],
         ScriptSizeMultipliers->1,
         ScriptBaselineShifts->{1, 1}],
        DisplayForm], 
       StyleBox["\[CenterDot]",
        FontColor->RGBColor[0, 1, 0]], 
       TagBox[
        StyleBox[
         TemplateBox[{"d", 
           RowBox[{
             TagBox[
              StyleBox[
              "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
           "\"\[Dagger]\""},
          "Subsuperscript"],
         ScriptSizeMultipliers->1,
         ScriptBaselineShifts->{1, 1}],
        DisplayForm], 
       StyleBox["\[CenterDot]",
        FontColor->RGBColor[0, 1, 0]], 
       TagBox[
        StyleBox[
         TemplateBox[{"d", 
           RowBox[{
             TagBox[
              StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
              StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], "\"\""},
          "Subsuperscript"],
         ScriptSizeMultipliers->1,
         ScriptBaselineShifts->{1, 1}],
        DisplayForm], 
       StyleBox["\[CenterDot]",
        FontColor->RGBColor[0, 1, 0]], 
       TagBox[
        StyleBox[
         TemplateBox[{"d", 
           RowBox[{
             TagBox[
              StyleBox[
              "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
              StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], "\"\""},
          "Subsuperscript"],
         ScriptSizeMultipliers->1,
         ScriptBaselineShifts->{1, 1}],
        DisplayForm]}]}]}], ")"}]}]}]], "Output",
 CellChangeTimes->{3.7988093940572577`*^9, 3.7988094489404373`*^9, 
  3.798809537362248*^9, 3.798864300987666*^9, 3.798864604194168*^9, 
  3.798864879906581*^9, 3.798875096411151*^9, 3.798875873118511*^9, 
  3.799040507416031*^9, 3.799043997434903*^9, 3.799418016249241*^9, 
  3.799480948429289*^9, 3.7994919693348417`*^9, 3.7995109176042767`*^9, 
  3.7999891785779533`*^9, 3.8000069896710453`*^9, 3.8000070517064457`*^9, 
  3.80173097569444*^9, 3.80174345325779*^9},
 CellLabel->"Out[9]=",ExpressionUUID->"54f29a9b-c066-4ae9-a3ad-bfbab72bfd53"]
}, Open  ]],

Cell[BoxData[
 RowBox[{
  RowBox[{"basisops", "=", 
   RowBox[{"{", 
    RowBox[{
     RowBox[{"a", "[", "]"}], ",", 
     RowBox[{"d", "[", "]"}], ",", 
     RowBox[{"f", "[", "0", "]"}]}], "}"}]}], ";"}]], "Input",
 CellChangeTimes->{{3.798809415881981*^9, 3.7988094832204113`*^9}, {
   3.798875140384873*^9, 3.798875146228196*^9}, {3.798875881756013*^9, 
   3.798875884726766*^9}, 3.79904398027207*^9, {3.801730980746458*^9, 
   3.8017309807927933`*^9}, {3.8017434568518543`*^9, 3.80174345799897*^9}},
 CellLabel->"In[10]:=",ExpressionUUID->"88f20552-f46c-40a0-b7a0-c203ef08a6c5"],

Cell[CellGroupData[{

Cell[BoxData[
 RowBox[{"diagSetupBasisQS", "[", "]"}]], "Input",
 CellChangeTimes->{{3.7988094919181137`*^9, 3.798809499465062*^9}, 
   3.7990405338920097`*^9, 3.799418027859992*^9},
 CellLabel->"In[11]:=",ExpressionUUID->"e21fac4d-ff26-4d90-9690-6a633fd5dd31"],

Cell[CellGroupData[{

Cell[BoxData[
 TagBox[
  RowBox[{"(", "\[NoBreak]", GridBox[{
     {
      RowBox[{"{", 
       RowBox[{
        RowBox[{"-", "3"}], ",", "0"}], "}"}], 
      RowBox[{"{", "1", "}"}]},
     {
      RowBox[{"{", 
       RowBox[{
        RowBox[{"-", "2"}], ",", 
        FractionBox["1", "2"]}], "}"}], 
      RowBox[{"{", 
       RowBox[{
        TagBox[
         StyleBox[
          TemplateBox[{"f", 
            RowBox[{"0", 
              TagBox[
               StyleBox[
               "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
            "\"\[Dagger]\""},
           "Subsuperscript"],
          ScriptSizeMultipliers->1,
          ScriptBaselineShifts->{1, 1}],
         DisplayForm], ",", 
        TagBox[
         StyleBox[
          TemplateBox[{"d", 
            RowBox[{
              TagBox[
               StyleBox[
               "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
            "\"\[Dagger]\""},
           "Subsuperscript"],
          ScriptSizeMultipliers->1,
          ScriptBaselineShifts->{1, 1}],
         DisplayForm], ",", 
        TagBox[
         StyleBox[
          TemplateBox[{"a", 
            RowBox[{
              TagBox[
               StyleBox[
               "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
            "\"\[Dagger]\""},
           "Subsuperscript"],
          ScriptSizeMultipliers->1,
          ScriptBaselineShifts->{1, 1}],
         DisplayForm]}], "}"}]},
     {
      RowBox[{"{", 
       RowBox[{
        RowBox[{"-", "1"}], ",", "0"}], "}"}], 
      RowBox[{"{", 
       RowBox[{
        RowBox[{
         TagBox[
          StyleBox[
           TemplateBox[{"f", 
             RowBox[{"0", 
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"f", 
             RowBox[{"0", 
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm]}], ",", 
        FractionBox[
         RowBox[{
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}], "-", 
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}]}], 
         SqrtBox["2"]], ",", 
        FractionBox[
         RowBox[{
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}], "-", 
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}]}], 
         SqrtBox["2"]], ",", 
        RowBox[{
         TagBox[
          StyleBox[
           TemplateBox[{"d", 
             RowBox[{
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"d", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm]}], ",", 
        FractionBox[
         RowBox[{
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}], "-", 
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}]}], 
         SqrtBox["2"]], ",", 
        RowBox[{
         TagBox[
          StyleBox[
           TemplateBox[{"a", 
             RowBox[{
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"a", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm]}]}], "}"}]},
     {
      RowBox[{"{", 
       RowBox[{
        RowBox[{"-", "1"}], ",", "1"}], "}"}], 
      RowBox[{"{", 
       RowBox[{
        RowBox[{"-", 
         RowBox[{"(", 
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}], ")"}]}], ",", 
        RowBox[{"-", 
         RowBox[{"(", 
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}], ")"}]}], ",", 
        RowBox[{"-", 
         RowBox[{"(", 
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}], ")"}]}]}], "}"}]},
     {
      RowBox[{"{", 
       RowBox[{"0", ",", 
        FractionBox["1", "2"]}], "}"}], 
      RowBox[{"{", 
       RowBox[{
        RowBox[{
         TagBox[
          StyleBox[
           TemplateBox[{"d", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"f", 
             RowBox[{"0", 
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"f", 
             RowBox[{"0", 
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm]}], ",", 
        RowBox[{
         TagBox[
          StyleBox[
           TemplateBox[{"a", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"f", 
             RowBox[{"0", 
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"f", 
             RowBox[{"0", 
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm]}], ",", 
        RowBox[{
         TagBox[
          StyleBox[
           TemplateBox[{"d", 
             RowBox[{
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"d", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"f", 
             RowBox[{"0", 
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm]}], ",", 
        FractionBox[
         RowBox[{
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}], "-", 
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}]}], 
         SqrtBox["2"]], ",", 
        RowBox[{
         TagBox[
          StyleBox[
           TemplateBox[{"a", 
             RowBox[{
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"a", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"f", 
             RowBox[{"0", 
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm]}], ",", 
        FractionBox[
         RowBox[{
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}], "+", 
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}], "-", 
          RowBox[{"2", " ", 
           RowBox[{
            TagBox[
             StyleBox[
              TemplateBox[{"a", 
                RowBox[{
                  TagBox[
                   StyleBox[
                   "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
                "\"\[Dagger]\""},
               "Subsuperscript"],
              ScriptSizeMultipliers->1,
              ScriptBaselineShifts->{1, 1}],
             DisplayForm], 
            StyleBox["\[CenterDot]",
             FontColor->RGBColor[0, 1, 0]], 
            TagBox[
             StyleBox[
              TemplateBox[{"d", 
                RowBox[{
                  TagBox[
                   StyleBox[
                   "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
                "\"\[Dagger]\""},
               "Subsuperscript"],
              ScriptSizeMultipliers->1,
              ScriptBaselineShifts->{1, 1}],
             DisplayForm], 
            StyleBox["\[CenterDot]",
             FontColor->RGBColor[0, 1, 0]], 
            TagBox[
             StyleBox[
              TemplateBox[{"f", 
                RowBox[{"0", 
                  TagBox[
                   StyleBox[
                   "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
                "\"\[Dagger]\""},
               "Subsuperscript"],
              ScriptSizeMultipliers->1,
              ScriptBaselineShifts->{1, 1}],
             DisplayForm]}]}]}], 
         SqrtBox["6"]], ",", 
        RowBox[{
         TagBox[
          StyleBox[
           TemplateBox[{"a", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"d", 
             RowBox[{
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"d", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm]}], ",", 
        RowBox[{
         TagBox[
          StyleBox[
           TemplateBox[{"a", 
             RowBox[{
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"a", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"d", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm]}]}], "}"}]},
     {
      RowBox[{"{", 
       RowBox[{"0", ",", 
        FractionBox["3", "2"]}], "}"}], 
      RowBox[{"{", 
       RowBox[{"-", 
        RowBox[{"(", 
         RowBox[{
          TagBox[
           StyleBox[
            TemplateBox[{"a", 
              RowBox[{
                TagBox[
                 StyleBox[
                 "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                 StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
              "\"\[Dagger]\""},
             "Subsuperscript"],
            ScriptSizeMultipliers->1,
            ScriptBaselineShifts->{1, 1}],
           DisplayForm], 
          StyleBox["\[CenterDot]",
           FontColor->RGBColor[0, 1, 0]], 
          TagBox[
           StyleBox[
            TemplateBox[{"d", 
              RowBox[{
                TagBox[
                 StyleBox[
                 "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                 StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
              "\"\[Dagger]\""},
             "Subsuperscript"],
            ScriptSizeMultipliers->1,
            ScriptBaselineShifts->{1, 1}],
           DisplayForm], 
          StyleBox["\[CenterDot]",
           FontColor->RGBColor[0, 1, 0]], 
          TagBox[
           StyleBox[
            TemplateBox[{"f", 
              RowBox[{"0", 
                TagBox[
                 StyleBox[
                 "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                 StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
              "\"\[Dagger]\""},
             "Subsuperscript"],
            ScriptSizeMultipliers->1,
            ScriptBaselineShifts->{1, 1}],
           DisplayForm]}], ")"}]}], "}"}]},
     {
      RowBox[{"{", 
       RowBox[{"1", ",", "0"}], "}"}], 
      RowBox[{"{", 
       RowBox[{
        RowBox[{
         TagBox[
          StyleBox[
           TemplateBox[{"d", 
             RowBox[{
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"d", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"f", 
             RowBox[{"0", 
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"f", 
             RowBox[{"0", 
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm]}], ",", 
        FractionBox[
         RowBox[{
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}], "-", 
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}]}], 
         SqrtBox["2"]], ",", 
        RowBox[{
         TagBox[
          StyleBox[
           TemplateBox[{"a", 
             RowBox[{
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"a", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"f", 
             RowBox[{"0", 
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"f", 
             RowBox[{"0", 
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm]}], ",", 
        FractionBox[
         RowBox[{
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}], "-", 
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}]}], 
         SqrtBox["2"]], ",", 
        FractionBox[
         RowBox[{
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}], "-", 
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}]}], 
         SqrtBox["2"]], ",", 
        RowBox[{
         TagBox[
          StyleBox[
           TemplateBox[{"a", 
             RowBox[{
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"a", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"d", 
             RowBox[{
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"d", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm]}]}], "}"}]},
     {
      RowBox[{"{", 
       RowBox[{"1", ",", "1"}], "}"}], 
      RowBox[{"{", 
       RowBox[{
        RowBox[{"-", 
         RowBox[{"(", 
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}], ")"}]}], ",", 
        RowBox[{"-", 
         RowBox[{"(", 
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}], ")"}]}], ",", 
        RowBox[{"-", 
         RowBox[{"(", 
          RowBox[{
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                  StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"a", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"d", 
               RowBox[{
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm], 
           StyleBox["\[CenterDot]",
            FontColor->RGBColor[0, 1, 0]], 
           TagBox[
            StyleBox[
             TemplateBox[{"f", 
               RowBox[{"0", 
                 TagBox[
                  StyleBox[
                  "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                  StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
               "\"\[Dagger]\""},
              "Subsuperscript"],
             ScriptSizeMultipliers->1,
             ScriptBaselineShifts->{1, 1}],
            DisplayForm]}], ")"}]}]}], "}"}]},
     {
      RowBox[{"{", 
       RowBox[{"2", ",", 
        FractionBox["1", "2"]}], "}"}], 
      RowBox[{"{", 
       RowBox[{
        RowBox[{
         TagBox[
          StyleBox[
           TemplateBox[{"a", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"d", 
             RowBox[{
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"d", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"f", 
             RowBox[{"0", 
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"f", 
             RowBox[{"0", 
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm]}], ",", 
        RowBox[{
         TagBox[
          StyleBox[
           TemplateBox[{"a", 
             RowBox[{
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"a", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"d", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"f", 
             RowBox[{"0", 
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"f", 
             RowBox[{"0", 
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm]}], ",", 
        RowBox[{
         TagBox[
          StyleBox[
           TemplateBox[{"a", 
             RowBox[{
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"a", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"d", 
             RowBox[{
               TagBox[
                StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
                StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"d", 
             RowBox[{
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm], 
         StyleBox["\[CenterDot]",
          FontColor->RGBColor[0, 1, 0]], 
         TagBox[
          StyleBox[
           TemplateBox[{"f", 
             RowBox[{"0", 
               TagBox[
                StyleBox[
                "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
                StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
             "\"\[Dagger]\""},
            "Subsuperscript"],
           ScriptSizeMultipliers->1,
           ScriptBaselineShifts->{1, 1}],
          DisplayForm]}]}], "}"}]},
     {
      RowBox[{"{", 
       RowBox[{"3", ",", "0"}], "}"}], 
      RowBox[{"{", 
       RowBox[{
        TagBox[
         StyleBox[
          TemplateBox[{"a", 
            RowBox[{
              TagBox[
               StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
               StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
            "\"\[Dagger]\""},
           "Subsuperscript"],
          ScriptSizeMultipliers->1,
          ScriptBaselineShifts->{1, 1}],
         DisplayForm], 
        StyleBox["\[CenterDot]",
         FontColor->RGBColor[0, 1, 0]], 
        TagBox[
         StyleBox[
          TemplateBox[{"a", 
            RowBox[{
              TagBox[
               StyleBox[
               "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
            "\"\[Dagger]\""},
           "Subsuperscript"],
          ScriptSizeMultipliers->1,
          ScriptBaselineShifts->{1, 1}],
         DisplayForm], 
        StyleBox["\[CenterDot]",
         FontColor->RGBColor[0, 1, 0]], 
        TagBox[
         StyleBox[
          TemplateBox[{"d", 
            RowBox[{
              TagBox[
               StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
               StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
            "\"\[Dagger]\""},
           "Subsuperscript"],
          ScriptSizeMultipliers->1,
          ScriptBaselineShifts->{1, 1}],
         DisplayForm], 
        StyleBox["\[CenterDot]",
         FontColor->RGBColor[0, 1, 0]], 
        TagBox[
         StyleBox[
          TemplateBox[{"d", 
            RowBox[{
              TagBox[
               StyleBox[
               "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
            "\"\[Dagger]\""},
           "Subsuperscript"],
          ScriptSizeMultipliers->1,
          ScriptBaselineShifts->{1, 1}],
         DisplayForm], 
        StyleBox["\[CenterDot]",
         FontColor->RGBColor[0, 1, 0]], 
        TagBox[
         StyleBox[
          TemplateBox[{"f", 
            RowBox[{"0", 
              TagBox[
               StyleBox["\"\[DownArrow]\"", FontColor -> RGBColor[0, 0, 1]], 
               StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ]}], 
            "\"\[Dagger]\""},
           "Subsuperscript"],
          ScriptSizeMultipliers->1,
          ScriptBaselineShifts->{1, 1}],
         DisplayForm], 
        StyleBox["\[CenterDot]",
         FontColor->RGBColor[0, 1, 0]], 
        TagBox[
         StyleBox[
          TemplateBox[{"f", 
            RowBox[{"0", 
              TagBox[
               StyleBox[
               "\"\[DoubleUpArrow]\"", FontColor -> RGBColor[1, 0, 0]], 
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ]}], 
            "\"\[Dagger]\""},
           "Subsuperscript"],
          ScriptSizeMultipliers->1,
          ScriptBaselineShifts->{1, 1}],
         DisplayForm]}], "}"}]}
    },
    GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
    GridBoxSpacings->{"Columns" -> {
        Offset[0.27999999999999997`], {
         Offset[0.7]}, 
        Offset[0.27999999999999997`]}, "Rows" -> {
        Offset[0.2], {
         Offset[0.4]}, 
        Offset[0.2]}}], "\[NoBreak]", ")"}],
  Function[BoxForm`e$, 
   MatrixForm[BoxForm`e$]]]], "Print",
 CellChangeTimes->{
  3.7988095009546967`*^9, 3.798864618070261*^9, 3.798864879971485*^9, 
   3.7988751013479357`*^9, 3.7988758879476147`*^9, {3.79904050752108*^9, 
   3.799040534761504*^9}, 3.799044005620891*^9, {3.79941801647103*^9, 
   3.799418028156986*^9}, 3.799480948742199*^9, 3.799491969528082*^9, 
   3.799510917692938*^9, 3.7999891786463623`*^9, 3.8000069904536877`*^9, 
   3.800007058071056*^9, 3.801730986370741*^9, 3.801743461616066*^9},
 CellLabel->
  "During evaluation of \
In[11]:=",ExpressionUUID->"642cec21-30ad-4575-8224-730ad2e67e2e"],

Cell[BoxData[
 TagBox[
  RowBox[{"(", "\[NoBreak]", GridBox[{
     {
      RowBox[{"{", 
       RowBox[{
        RowBox[{"-", "3"}], ",", "0"}], "}"}], 
      RowBox[{"{", 
       TagBox[
        RowBox[{
         TagBox[
          StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
           FontColor->RGBColor[0, 1, 0]],
          StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
         TagBox[
          StyleBox["\<\"\[EmptyRectangle]\"\>",
           FontColor->RGBColor[1, 0, 0]],
          StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
         TagBox[
          StyleBox["\<\"\[EmptyRectangle]\"\>",
           FontColor->RGBColor[0, 0, 1]],
          StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
         TagBox[
          StyleBox["\<\"\[EmptyRectangle]\"\>",
           FontColor->RGBColor[1, 0, 0]],
          StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
         TagBox[
          StyleBox["\<\"\[EmptyRectangle]\"\>",
           FontColor->RGBColor[0, 0, 1]],
          StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
         TagBox[
          StyleBox["\<\"\[EmptyRectangle]\"\>",
           FontColor->RGBColor[1, 0, 0]],
          StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
         TagBox[
          StyleBox["\<\"\[EmptyRectangle]\"\>",
           FontColor->RGBColor[0, 0, 1]],
          StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
         TagBox[
          StyleBox["\<\"\[RightAngleBracket]\"\>",
           FontColor->RGBColor[0, 1, 0]],
          StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
        DisplayForm], "}"}]},
     {
      RowBox[{"{", 
       RowBox[{
        RowBox[{"-", "2"}], ",", 
        FractionBox["1", "2"]}], "}"}], 
      RowBox[{"{", 
       RowBox[{
        TagBox[
         RowBox[{
          TagBox[
           StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[RightAngleBracket]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
         DisplayForm], ",", 
        TagBox[
         RowBox[{
          TagBox[
           StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[RightAngleBracket]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
         DisplayForm], ",", 
        TagBox[
         RowBox[{
          TagBox[
           StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[RightAngleBracket]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
         DisplayForm]}], "}"}]},
     {
      RowBox[{"{", 
       RowBox[{
        RowBox[{"-", "1"}], ",", "0"}], "}"}], 
      RowBox[{"{", 
       RowBox[{
        InterpretationBox[
         RowBox[{"\<\"-\"\>", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}],
         -Sneg`vc[0, 0, 0, 0, 1, 1]], ",", 
        FractionBox[
         RowBox[{
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm], "-", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}], 
         SqrtBox["2"]], ",", 
        FractionBox[
         RowBox[{
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm], "-", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}], 
         SqrtBox["2"]], ",", 
        InterpretationBox[
         RowBox[{"\<\"-\"\>", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}],
         -Sneg`vc[0, 0, 1, 1, 0, 0]], ",", 
        FractionBox[
         RowBox[{
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm], "-", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}], 
         SqrtBox["2"]], ",", 
        InterpretationBox[
         RowBox[{"\<\"-\"\>", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}],
         -Sneg`vc[1, 1, 0, 0, 0, 0]]}], "}"}]},
     {
      RowBox[{"{", 
       RowBox[{
        RowBox[{"-", "1"}], ",", "1"}], "}"}], 
      RowBox[{"{", 
       RowBox[{
        InterpretationBox[
         RowBox[{"\<\"-\"\>", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}],
         -Sneg`vc[0, 0, 1, 0, 1, 0]], ",", 
        InterpretationBox[
         RowBox[{"\<\"-\"\>", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}],
         -Sneg`vc[1, 0, 0, 0, 1, 0]], ",", 
        InterpretationBox[
         RowBox[{"\<\"-\"\>", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}],
         -Sneg`vc[1, 0, 1, 0, 0, 0]]}], "}"}]},
     {
      RowBox[{"{", 
       RowBox[{"0", ",", 
        FractionBox["1", "2"]}], "}"}], 
      RowBox[{"{", 
       RowBox[{
        InterpretationBox[
         RowBox[{"\<\"-\"\>", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}],
         -Sneg`vc[0, 0, 1, 0, 1, 1]], ",", 
        InterpretationBox[
         RowBox[{"\<\"-\"\>", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}],
         -Sneg`vc[1, 0, 0, 0, 1, 1]], ",", 
        InterpretationBox[
         RowBox[{"\<\"-\"\>", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}],
         -Sneg`vc[0, 0, 1, 1, 1, 0]], ",", 
        FractionBox[
         RowBox[{
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm], "-", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}], 
         SqrtBox["2"]], ",", 
        InterpretationBox[
         RowBox[{"\<\"-\"\>", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}],
         -Sneg`vc[1, 1, 0, 0, 1, 0]], ",", 
        FractionBox[
         RowBox[{
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm], "+", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm], "-", 
          InterpretationBox[
           RowBox[{"2", 
            TagBox[
             RowBox[{
              TagBox[
               StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                FontColor->RGBColor[0, 1, 0]],
               StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
              TagBox[
               StyleBox["\<\"\[FilledRectangle]\"\>",
                FontColor->RGBColor[1, 0, 0]],
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
              TagBox[
               StyleBox["\<\"\[EmptyRectangle]\"\>",
                FontColor->RGBColor[0, 0, 1]],
               StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
              TagBox[
               StyleBox["\<\"\[FilledRectangle]\"\>",
                FontColor->RGBColor[1, 0, 0]],
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
              TagBox[
               StyleBox["\<\"\[EmptyRectangle]\"\>",
                FontColor->RGBColor[0, 0, 1]],
               StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
              TagBox[
               StyleBox["\<\"\[EmptyRectangle]\"\>",
                FontColor->RGBColor[1, 0, 0]],
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
              TagBox[
               StyleBox["\<\"\[FilledRectangle]\"\>",
                FontColor->RGBColor[0, 0, 1]],
               StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
              TagBox[
               StyleBox["\<\"\[RightAngleBracket]\"\>",
                FontColor->RGBColor[0, 1, 0]],
               StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
             DisplayForm]}],
           2 Sneg`vc[1, 0, 1, 0, 0, 1]]}], 
         SqrtBox["6"]], ",", 
        InterpretationBox[
         RowBox[{"\<\"-\"\>", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}],
         -Sneg`vc[1, 0, 1, 1, 0, 0]], ",", 
        InterpretationBox[
         RowBox[{"\<\"-\"\>", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}],
         -Sneg`vc[1, 1, 1, 0, 0, 0]]}], "}"}]},
     {
      RowBox[{"{", 
       RowBox[{"0", ",", 
        FractionBox["3", "2"]}], "}"}], 
      RowBox[{"{", 
       InterpretationBox[
        RowBox[{"\<\"-\"\>", 
         TagBox[
          RowBox[{
           TagBox[
            StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
             FontColor->RGBColor[0, 1, 0]],
            StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
           TagBox[
            StyleBox["\<\"\[FilledRectangle]\"\>",
             FontColor->RGBColor[1, 0, 0]],
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
           TagBox[
            StyleBox["\<\"\[EmptyRectangle]\"\>",
             FontColor->RGBColor[0, 0, 1]],
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
           TagBox[
            StyleBox["\<\"\[FilledRectangle]\"\>",
             FontColor->RGBColor[1, 0, 0]],
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
           TagBox[
            StyleBox["\<\"\[EmptyRectangle]\"\>",
             FontColor->RGBColor[0, 0, 1]],
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
           TagBox[
            StyleBox["\<\"\[FilledRectangle]\"\>",
             FontColor->RGBColor[1, 0, 0]],
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
           TagBox[
            StyleBox["\<\"\[EmptyRectangle]\"\>",
             FontColor->RGBColor[0, 0, 1]],
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
           TagBox[
            StyleBox["\<\"\[RightAngleBracket]\"\>",
             FontColor->RGBColor[0, 1, 0]],
            StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
          DisplayForm]}],
        -Sneg`vc[1, 0, 1, 0, 1, 0]], "}"}]},
     {
      RowBox[{"{", 
       RowBox[{"1", ",", "0"}], "}"}], 
      RowBox[{"{", 
       RowBox[{
        TagBox[
         RowBox[{
          TagBox[
           StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[RightAngleBracket]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
         DisplayForm], ",", 
        FractionBox[
         RowBox[{
          InterpretationBox[
           RowBox[{"\<\"-\"\>", 
            TagBox[
             RowBox[{
              TagBox[
               StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                FontColor->RGBColor[0, 1, 0]],
               StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
              TagBox[
               StyleBox["\<\"\[EmptyRectangle]\"\>",
                FontColor->RGBColor[1, 0, 0]],
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
              TagBox[
               StyleBox["\<\"\[FilledRectangle]\"\>",
                FontColor->RGBColor[0, 0, 1]],
               StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
              TagBox[
               StyleBox["\<\"\[FilledRectangle]\"\>",
                FontColor->RGBColor[1, 0, 0]],
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
              TagBox[
               StyleBox["\<\"\[EmptyRectangle]\"\>",
                FontColor->RGBColor[0, 0, 1]],
               StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
              TagBox[
               StyleBox["\<\"\[FilledRectangle]\"\>",
                FontColor->RGBColor[1, 0, 0]],
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
              TagBox[
               StyleBox["\<\"\[FilledRectangle]\"\>",
                FontColor->RGBColor[0, 0, 1]],
               StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
              TagBox[
               StyleBox["\<\"\[RightAngleBracket]\"\>",
                FontColor->RGBColor[0, 1, 0]],
               StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
             DisplayForm]}],
           -Sneg`vc[0, 1, 1, 0, 1, 1]], "+", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}], 
         SqrtBox["2"]], ",", 
        TagBox[
         RowBox[{
          TagBox[
           StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[RightAngleBracket]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
         DisplayForm], ",", 
        FractionBox[
         RowBox[{
          InterpretationBox[
           RowBox[{"\<\"-\"\>", 
            TagBox[
             RowBox[{
              TagBox[
               StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                FontColor->RGBColor[0, 1, 0]],
               StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
              TagBox[
               StyleBox["\<\"\[EmptyRectangle]\"\>",
                FontColor->RGBColor[1, 0, 0]],
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
              TagBox[
               StyleBox["\<\"\[FilledRectangle]\"\>",
                FontColor->RGBColor[0, 0, 1]],
               StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
              TagBox[
               StyleBox["\<\"\[FilledRectangle]\"\>",
                FontColor->RGBColor[1, 0, 0]],
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
              TagBox[
               StyleBox["\<\"\[FilledRectangle]\"\>",
                FontColor->RGBColor[0, 0, 1]],
               StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
              TagBox[
               StyleBox["\<\"\[FilledRectangle]\"\>",
                FontColor->RGBColor[1, 0, 0]],
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
              TagBox[
               StyleBox["\<\"\[EmptyRectangle]\"\>",
                FontColor->RGBColor[0, 0, 1]],
               StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
              TagBox[
               StyleBox["\<\"\[RightAngleBracket]\"\>",
                FontColor->RGBColor[0, 1, 0]],
               StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
             DisplayForm]}],
           -Sneg`vc[0, 1, 1, 1, 1, 0]], "+", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}], 
         SqrtBox["2"]], ",", 
        FractionBox[
         RowBox[{
          InterpretationBox[
           RowBox[{"\<\"-\"\>", 
            TagBox[
             RowBox[{
              TagBox[
               StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                FontColor->RGBColor[0, 1, 0]],
               StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
              TagBox[
               StyleBox["\<\"\[FilledRectangle]\"\>",
                FontColor->RGBColor[1, 0, 0]],
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
              TagBox[
               StyleBox["\<\"\[FilledRectangle]\"\>",
                FontColor->RGBColor[0, 0, 1]],
               StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
              TagBox[
               StyleBox["\<\"\[EmptyRectangle]\"\>",
                FontColor->RGBColor[1, 0, 0]],
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
              TagBox[
               StyleBox["\<\"\[FilledRectangle]\"\>",
                FontColor->RGBColor[0, 0, 1]],
               StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
              TagBox[
               StyleBox["\<\"\[FilledRectangle]\"\>",
                FontColor->RGBColor[1, 0, 0]],
               StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
              TagBox[
               StyleBox["\<\"\[EmptyRectangle]\"\>",
                FontColor->RGBColor[0, 0, 1]],
               StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
              TagBox[
               StyleBox["\<\"\[RightAngleBracket]\"\>",
                FontColor->RGBColor[0, 1, 0]],
               StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
             DisplayForm]}],
           -Sneg`vc[1, 1, 0, 1, 1, 0]], "+", 
          TagBox[
           RowBox[{
            TagBox[
             StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[EmptyRectangle]\"\>",
              FontColor->RGBColor[1, 0, 0]],
             StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
            TagBox[
             StyleBox["\<\"\[FilledRectangle]\"\>",
              FontColor->RGBColor[0, 0, 1]],
             StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
            TagBox[
             StyleBox["\<\"\[RightAngleBracket]\"\>",
              FontColor->RGBColor[0, 1, 0]],
             StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
           DisplayForm]}], 
         SqrtBox["2"]], ",", 
        TagBox[
         RowBox[{
          TagBox[
           StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[RightAngleBracket]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
         DisplayForm]}], "}"}]},
     {
      RowBox[{"{", 
       RowBox[{"1", ",", "1"}], "}"}], 
      RowBox[{"{", 
       RowBox[{
        TagBox[
         RowBox[{
          TagBox[
           StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[RightAngleBracket]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
         DisplayForm], ",", 
        TagBox[
         RowBox[{
          TagBox[
           StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[RightAngleBracket]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
         DisplayForm], ",", 
        TagBox[
         RowBox[{
          TagBox[
           StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[RightAngleBracket]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
         DisplayForm]}], "}"}]},
     {
      RowBox[{"{", 
       RowBox[{"2", ",", 
        FractionBox["1", "2"]}], "}"}], 
      RowBox[{"{", 
       RowBox[{
        TagBox[
         RowBox[{
          TagBox[
           StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[RightAngleBracket]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
         DisplayForm], ",", 
        TagBox[
         RowBox[{
          TagBox[
           StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[RightAngleBracket]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
         DisplayForm], ",", 
        TagBox[
         RowBox[{
          TagBox[
           StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[FilledRectangle]\"\>",
            FontColor->RGBColor[1, 0, 0]],
           StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
          TagBox[
           StyleBox["\<\"\[EmptyRectangle]\"\>",
            FontColor->RGBColor[0, 0, 1]],
           StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
          TagBox[
           StyleBox["\<\"\[RightAngleBracket]\"\>",
            FontColor->RGBColor[0, 1, 0]],
           StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
         DisplayForm]}], "}"}]},
     {
      RowBox[{"{", 
       RowBox[{"3", ",", "0"}], "}"}], 
      RowBox[{"{", 
       InterpretationBox[
        RowBox[{"\<\"-\"\>", 
         TagBox[
          RowBox[{
           TagBox[
            StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
             FontColor->RGBColor[0, 1, 0]],
            StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
           TagBox[
            StyleBox["\<\"\[FilledRectangle]\"\>",
             FontColor->RGBColor[1, 0, 0]],
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
           TagBox[
            StyleBox["\<\"\[FilledRectangle]\"\>",
             FontColor->RGBColor[0, 0, 1]],
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
           TagBox[
            StyleBox["\<\"\[FilledRectangle]\"\>",
             FontColor->RGBColor[1, 0, 0]],
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
           TagBox[
            StyleBox["\<\"\[FilledRectangle]\"\>",
             FontColor->RGBColor[0, 0, 1]],
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
           TagBox[
            StyleBox["\<\"\[FilledRectangle]\"\>",
             FontColor->RGBColor[1, 0, 0]],
            StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
           TagBox[
            StyleBox["\<\"\[FilledRectangle]\"\>",
             FontColor->RGBColor[0, 0, 1]],
            StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
           TagBox[
            StyleBox["\<\"\[RightAngleBracket]\"\>",
             FontColor->RGBColor[0, 1, 0]],
            StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
          DisplayForm]}],
        -Sneg`vc[1, 1, 1, 1, 1, 1]], "}"}]}
    },
    GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
    GridBoxSpacings->{"Columns" -> {
        Offset[0.27999999999999997`], {
         Offset[0.7]}, 
        Offset[0.27999999999999997`]}, "Rows" -> {
        Offset[0.2], {
         Offset[0.4]}, 
        Offset[0.2]}}], "\[NoBreak]", ")"}],
  Function[BoxForm`e$, 
   MatrixForm[BoxForm`e$]]]], "Print",
 CellChangeTimes->{
  3.7988095009546967`*^9, 3.798864618070261*^9, 3.798864879971485*^9, 
   3.7988751013479357`*^9, 3.7988758879476147`*^9, {3.79904050752108*^9, 
   3.799040534761504*^9}, 3.799044005620891*^9, {3.79941801647103*^9, 
   3.799418028156986*^9}, 3.799480948742199*^9, 3.799491969528082*^9, 
   3.799510917692938*^9, 3.7999891786463623`*^9, 3.8000069904536877`*^9, 
   3.800007058071056*^9, 3.801730986370741*^9, 3.801743461659452*^9},
 CellLabel->
  "During evaluation of \
In[11]:=",ExpressionUUID->"5675e344-88a7-44df-a974-590ad6ae6baa"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell[BoxData[
 RowBox[{"diagSetupHam", "[", "]"}]], "Input",
 CellChangeTimes->{{3.7988094712071657`*^9, 3.798809471916026*^9}, {
  3.798809572132267*^9, 3.7988095858282747`*^9}},
 CellLabel->"In[12]:=",ExpressionUUID->"d7fb02cf-12a4-460c-ba6c-327a735938d6"],

Cell[BoxData[
 TagBox[
  RowBox[{"(", "\[NoBreak]", GridBox[{
     {
      RowBox[{"{", 
       RowBox[{
        RowBox[{"-", "3"}], ",", "0"}], "}"}], 
      TagBox[
       RowBox[{"(", "\[NoBreak]", GridBox[{
          {
           RowBox[{"2", " ", "u"}]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.7]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}], "\[NoBreak]", ")"}],
       Function[BoxForm`e$, 
        MatrixForm[BoxForm`e$]]]},
     {
      RowBox[{"{", 
       RowBox[{
        RowBox[{"-", "2"}], ",", 
        FractionBox["1", "2"]}], "}"}], 
      TagBox[
       RowBox[{"(", "\[NoBreak]", GridBox[{
          {
           RowBox[{"2", " ", "u"}], 
           SqrtBox["\[Gamma]"], 
           SqrtBox["\[Gamma]"]},
          {
           SqrtBox["\[Gamma]"], "u", "0"},
          {
           SqrtBox["\[Gamma]"], "0", "u"}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.7]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}], "\[NoBreak]", ")"}],
       Function[BoxForm`e$, 
        MatrixForm[BoxForm`e$]]]},
     {
      RowBox[{"{", 
       RowBox[{
        RowBox[{"-", "1"}], ",", "0"}], "}"}], 
      TagBox[
       RowBox[{"(", "\[NoBreak]", GridBox[{
          {
           RowBox[{"2", " ", "u"}], 
           SqrtBox[
            RowBox[{"2", " ", "\[Gamma]"}]], 
           SqrtBox[
            RowBox[{"2", " ", "\[Gamma]"}]], "0", "0", "0"},
          {
           SqrtBox[
            RowBox[{"2", " ", "\[Gamma]"}]], "u", "0", 
           SqrtBox[
            RowBox[{"2", " ", "\[Gamma]"}]], 
           SqrtBox["\[Gamma]"], "0"},
          {
           SqrtBox[
            RowBox[{"2", " ", "\[Gamma]"}]], "0", "u", "0", 
           SqrtBox["\[Gamma]"], 
           SqrtBox[
            RowBox[{"2", " ", "\[Gamma]"}]]},
          {"0", 
           SqrtBox[
            RowBox[{"2", " ", "\[Gamma]"}]], "0", 
           RowBox[{"2", " ", "u"}], "0", "0"},
          {"0", 
           SqrtBox["\[Gamma]"], 
           SqrtBox["\[Gamma]"], "0", "0", "0"},
          {"0", "0", 
           SqrtBox[
            RowBox[{"2", " ", "\[Gamma]"}]], "0", "0", 
           RowBox[{"2", " ", "u"}]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.7]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}], "\[NoBreak]", ")"}],
       Function[BoxForm`e$, 
        MatrixForm[BoxForm`e$]]]},
     {
      RowBox[{"{", 
       RowBox[{
        RowBox[{"-", "1"}], ",", "1"}], "}"}], 
      TagBox[
       RowBox[{"(", "\[NoBreak]", GridBox[{
          {"u", "0", 
           RowBox[{"-", 
            SqrtBox["\[Gamma]"]}]},
          {"0", "u", 
           SqrtBox["\[Gamma]"]},
          {
           RowBox[{"-", 
            SqrtBox["\[Gamma]"]}], 
           SqrtBox["\[Gamma]"], "0"}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.7]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}], "\[NoBreak]", ")"}],
       Function[BoxForm`e$, 
        MatrixForm[BoxForm`e$]]]},
     {
      RowBox[{"{", 
       RowBox[{"0", ",", 
        FractionBox["1", "2"]}], "}"}], 
      TagBox[
       RowBox[{"(", "\[NoBreak]", GridBox[{
          {"u", "0", 
           RowBox[{"-", 
            SqrtBox["\[Gamma]"]}], 
           RowBox[{"-", 
            SqrtBox[
             FractionBox["\[Gamma]", "2"]]}], "0", 
           RowBox[{"-", 
            SqrtBox[
             FractionBox[
              RowBox[{"3", " ", "\[Gamma]"}], "2"]]}], "0", "0"},
          {"0", "u", "0", 
           RowBox[{"-", 
            SqrtBox[
             FractionBox["\[Gamma]", "2"]]}], 
           RowBox[{"-", 
            SqrtBox["\[Gamma]"]}], 
           SqrtBox[
            FractionBox[
             RowBox[{"3", " ", "\[Gamma]"}], "2"]], "0", "0"},
          {
           RowBox[{"-", 
            SqrtBox["\[Gamma]"]}], "0", 
           RowBox[{"2", " ", "u"}], "0", "0", "0", 
           SqrtBox["\[Gamma]"], "0"},
          {
           RowBox[{"-", 
            SqrtBox[
             FractionBox["\[Gamma]", "2"]]}], 
           RowBox[{"-", 
            SqrtBox[
             FractionBox["\[Gamma]", "2"]]}], "0", "0", "0", "0", 
           RowBox[{"-", 
            SqrtBox[
             FractionBox["\[Gamma]", "2"]]}], 
           RowBox[{"-", 
            SqrtBox[
             FractionBox["\[Gamma]", "2"]]}]},
          {"0", 
           RowBox[{"-", 
            SqrtBox["\[Gamma]"]}], "0", "0", 
           RowBox[{"2", " ", "u"}], "0", "0", 
           SqrtBox["\[Gamma]"]},
          {
           RowBox[{"-", 
            SqrtBox[
             FractionBox[
              RowBox[{"3", " ", "\[Gamma]"}], "2"]]}], 
           SqrtBox[
            FractionBox[
             RowBox[{"3", " ", "\[Gamma]"}], "2"]], "0", "0", "0", "0", 
           SqrtBox[
            FractionBox[
             RowBox[{"3", " ", "\[Gamma]"}], "2"]], 
           RowBox[{"-", 
            SqrtBox[
             FractionBox[
              RowBox[{"3", " ", "\[Gamma]"}], "2"]]}]},
          {"0", "0", 
           SqrtBox["\[Gamma]"], 
           RowBox[{"-", 
            SqrtBox[
             FractionBox["\[Gamma]", "2"]]}], "0", 
           SqrtBox[
            FractionBox[
             RowBox[{"3", " ", "\[Gamma]"}], "2"]], "u", "0"},
          {"0", "0", "0", 
           RowBox[{"-", 
            SqrtBox[
             FractionBox["\[Gamma]", "2"]]}], 
           SqrtBox["\[Gamma]"], 
           RowBox[{"-", 
            SqrtBox[
             FractionBox[
              RowBox[{"3", " ", "\[Gamma]"}], "2"]]}], "0", "u"}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.7]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}], "\[NoBreak]", ")"}],
       Function[BoxForm`e$, 
        MatrixForm[BoxForm`e$]]]},
     {
      RowBox[{"{", 
       RowBox[{"0", ",", 
        FractionBox["3", "2"]}], "}"}], 
      TagBox[
       RowBox[{"(", "\[NoBreak]", GridBox[{
          {"0"}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.7]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}], "\[NoBreak]", ")"}],
       Function[BoxForm`e$, 
        MatrixForm[BoxForm`e$]]]},
     {
      RowBox[{"{", 
       RowBox[{"1", ",", "0"}], "}"}], 
      TagBox[
       RowBox[{"(", "\[NoBreak]", GridBox[{
          {
           RowBox[{"2", " ", "u"}], "0", "0", 
           SqrtBox[
            RowBox[{"2", " ", "\[Gamma]"}]], "0", "0"},
          {"0", "0", "0", 
           RowBox[{"-", 
            SqrtBox["\[Gamma]"]}], 
           RowBox[{"-", 
            SqrtBox["\[Gamma]"]}], "0"},
          {"0", "0", 
           RowBox[{"2", " ", "u"}], "0", 
           SqrtBox[
            RowBox[{"2", " ", "\[Gamma]"}]], "0"},
          {
           SqrtBox[
            RowBox[{"2", " ", "\[Gamma]"}]], 
           RowBox[{"-", 
            SqrtBox["\[Gamma]"]}], "0", "u", "0", 
           SqrtBox[
            RowBox[{"2", " ", "\[Gamma]"}]]},
          {"0", 
           RowBox[{"-", 
            SqrtBox["\[Gamma]"]}], 
           SqrtBox[
            RowBox[{"2", " ", "\[Gamma]"}]], "0", "u", 
           SqrtBox[
            RowBox[{"2", " ", "\[Gamma]"}]]},
          {"0", "0", "0", 
           SqrtBox[
            RowBox[{"2", " ", "\[Gamma]"}]], 
           SqrtBox[
            RowBox[{"2", " ", "\[Gamma]"}]], 
           RowBox[{"2", " ", "u"}]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.7]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}], "\[NoBreak]", ")"}],
       Function[BoxForm`e$, 
        MatrixForm[BoxForm`e$]]]},
     {
      RowBox[{"{", 
       RowBox[{"1", ",", "1"}], "}"}], 
      TagBox[
       RowBox[{"(", "\[NoBreak]", GridBox[{
          {"0", 
           RowBox[{"-", 
            SqrtBox["\[Gamma]"]}], 
           SqrtBox["\[Gamma]"]},
          {
           RowBox[{"-", 
            SqrtBox["\[Gamma]"]}], "u", "0"},
          {
           SqrtBox["\[Gamma]"], "0", "u"}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.7]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}], "\[NoBreak]", ")"}],
       Function[BoxForm`e$, 
        MatrixForm[BoxForm`e$]]]},
     {
      RowBox[{"{", 
       RowBox[{"2", ",", 
        FractionBox["1", "2"]}], "}"}], 
      TagBox[
       RowBox[{"(", "\[NoBreak]", GridBox[{
          {"u", "0", 
           RowBox[{"-", 
            SqrtBox["\[Gamma]"]}]},
          {"0", "u", 
           RowBox[{"-", 
            SqrtBox["\[Gamma]"]}]},
          {
           RowBox[{"-", 
            SqrtBox["\[Gamma]"]}], 
           RowBox[{"-", 
            SqrtBox["\[Gamma]"]}], 
           RowBox[{"2", " ", "u"}]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.7]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}], "\[NoBreak]", ")"}],
       Function[BoxForm`e$, 
        MatrixForm[BoxForm`e$]]]},
     {
      RowBox[{"{", 
       RowBox[{"3", ",", "0"}], "}"}], 
      TagBox[
       RowBox[{"(", "\[NoBreak]", GridBox[{
          {
           RowBox[{"2", " ", "u"}]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.7]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}], "\[NoBreak]", ")"}],
       Function[BoxForm`e$, 
        MatrixForm[BoxForm`e$]]]}
    },
    GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
    GridBoxSpacings->{"Columns" -> {
        Offset[0.27999999999999997`], {
         Offset[0.7]}, 
        Offset[0.27999999999999997`]}, "Rows" -> {
        Offset[0.2], {
         Offset[0.4]}, 
        Offset[0.2]}}], "\[NoBreak]", ")"}],
  Function[BoxForm`e$, 
   MatrixForm[BoxForm`e$]]]], "Print",
 CellChangeTimes->{
  3.7988095883497257`*^9, {3.7988646207876863`*^9, 3.798864623766173*^9}, 
   3.798864880020389*^9, 3.798875891097838*^9, 3.799040507572905*^9, 
   3.799040551299961*^9, 3.7990440084812307`*^9, {3.7994180166367617`*^9, 
   3.799418037707415*^9}, 3.799480948823277*^9, 3.799491969588192*^9, 
   3.799510917742375*^9, 3.7999891787072983`*^9, 3.800006990720533*^9, 
   3.800007062824134*^9, 3.801730988988039*^9, 3.8017434651176453`*^9},
 CellLabel->
  "During evaluation of \
In[12]:=",ExpressionUUID->"39402e2b-726e-4325-8545-28e88fb3a3ed"]
}, Open  ]],

Cell[BoxData[{
 RowBox[{"diagonalize", "[", 
  RowBox[{"{", 
   RowBox[{
    RowBox[{"u", "\[Rule]", "0.1"}], ",", 
    RowBox[{"\[Gamma]", "\[Rule]", " ", "0.001"}]}], "}"}], 
  "]"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"eig", "//", "MatrixForm"}], ";"}]}], "Input",
 CellChangeTimes->{{3.798810738025288*^9, 3.798810746609495*^9}, {
   3.798810903686252*^9, 3.798810924102931*^9}, {3.798811292078075*^9, 
   3.7988112950303917`*^9}, {3.798811339424377*^9, 3.7988113606391163`*^9}, {
   3.799418042156242*^9, 3.7994180480688562`*^9}, {3.799418081061079*^9, 
   3.799418097142501*^9}, 3.799480999567822*^9, {3.800007069414729*^9, 
   3.800007081174144*^9}, {3.801743596630762*^9, 3.801743600676978*^9}},
 CellLabel->"In[17]:=",ExpressionUUID->"42cc3490-e02a-463f-b616-3b0c23df1ca3"],

Cell[CellGroupData[{

Cell[BoxData[
 RowBox[{"eig2", "//", "MatrixForm"}]], "Input",
 CellChangeTimes->{{3.799480984755001*^9, 3.799480989016664*^9}},
 CellLabel->"In[19]:=",ExpressionUUID->"11c861c6-c985-4639-8ad3-95ace8f2996b"],

Cell[BoxData[
 TagBox[
  RowBox[{"(", "\[NoBreak]", GridBox[{
     {
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {
           RowBox[{"-", "3"}]},
          {"0"}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}], 
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {
           RowBox[{"{", "0.2`", "}"}]},
          {
           RowBox[{"{", 
            InterpretationBox[
             RowBox[{"1.`", 
              TagBox[
               RowBox[{
                TagBox[
                 StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                  FontColor->RGBColor[0, 1, 0]],
                 StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                TagBox[
                 StyleBox["\<\"\[EmptyRectangle]\"\>",
                  FontColor->RGBColor[1, 0, 0]],
                 StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                TagBox[
                 StyleBox["\<\"\[EmptyRectangle]\"\>",
                  FontColor->RGBColor[0, 0, 1]],
                 StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                TagBox[
                 StyleBox["\<\"\[EmptyRectangle]\"\>",
                  FontColor->RGBColor[1, 0, 0]],
                 StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                TagBox[
                 StyleBox["\<\"\[EmptyRectangle]\"\>",
                  FontColor->RGBColor[0, 0, 1]],
                 StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                TagBox[
                 StyleBox["\<\"\[EmptyRectangle]\"\>",
                  FontColor->RGBColor[1, 0, 0]],
                 StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                TagBox[
                 StyleBox["\<\"\[EmptyRectangle]\"\>",
                  FontColor->RGBColor[0, 0, 1]],
                 StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                TagBox[
                 StyleBox["\<\"\[RightAngleBracket]\"\>",
                  FontColor->RGBColor[0, 1, 0]],
                 StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
               DisplayForm]}],
             1. Sneg`vc[0, 0, 0, 0, 0, 0]], "}"}]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}]},
     {
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {
           RowBox[{"-", "2"}]},
          {
           FractionBox["1", "2"]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}], 
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {
           RowBox[{"{", 
            RowBox[{
            "0.2170820393249936`", ",", "0.1`", ",", "0.08291796067500633`"}],
             "}"}]},
          {
           RowBox[{"{", 
            RowBox[{
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.9341723589627158`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.9341723589627158) Sneg`vc[0, 0, 0, 0, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.2523113193557073`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.2523113193557073 Sneg`vc[0, 0, 1, 0, 0, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.25231131935570666`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.25231131935570666` Sneg`vc[1, 0, 0, 0, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.7071067811865477`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.7071067811865477) Sneg`vc[0, 0, 1, 0, 0, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.7071067811865474`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.7071067811865474 Sneg`vc[1, 0, 0, 0, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{"0.35682208977308993`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.35682208977308993` Sneg`vc[0, 0, 0, 0, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.6605596098195695`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6605596098195695 Sneg`vc[0, 0, 1, 0, 0, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.6605596098195704`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6605596098195704 Sneg`vc[1, 0, 0, 0, 0, 0]]}]}], "}"}]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}]},
     {
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {
           RowBox[{"-", "1"}]},
          {"0"}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}], 
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {
           RowBox[{"{", 
            RowBox[{
            "0.24413590342385888`", ",", "0.2170820393249937`", ",", 
             "0.20000000000000004`", ",", "0.08291796067500631`", ",", 
             "0.07711162746623176`", ",", 
             RowBox[{"-", "0.021247530890090432`"}]}], "}"}]},
          {
           RowBox[{"{", 
            RowBox[{
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.7065177999511131`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.7065177999511131) Sneg`vc[0, 0, 0, 0, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.24652169051008616`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.24652169051008616` Sneg`vc[0, 0, 0, 1, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.24652169051008616`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.24652169051008616` Sneg`vc[0, 0, 1, 0, 0, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.3532588999755562`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.3532588999755562 Sneg`vc[0, 0, 1, 1, 0, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.24652169051008624`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.24652169051008624` Sneg`vc[0, 1, 0, 0, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.06386361233345765`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.06386361233345765 Sneg`vc[0, 1, 1, 0, 0, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.24652169051008624`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.24652169051008624` Sneg`vc[1, 0, 0, 0, 0, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.06386361233345765`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.06386361233345765 Sneg`vc[1, 0, 0, 1, 0, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.35325889997555593`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.35325889997555593` Sneg`vc[1, 1, 0, 0, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.178411044886545`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.178411044886545) Sneg`vc[0, 0, 0, 1, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.178411044886545`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.178411044886545 Sneg`vc[0, 0, 1, 0, 0, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.6605596098195725`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6605596098195725 Sneg`vc[0, 0, 1, 1, 0, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.1784110448865452`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.1784110448865452 Sneg`vc[0, 1, 0, 0, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.1784110448865452`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.1784110448865452 Sneg`vc[1, 0, 0, 0, 0, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.6605596098195673`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6605596098195673 Sneg`vc[1, 1, 0, 0, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.5773502691896257`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.5773502691896257) Sneg`vc[0, 0, 0, 0, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.5773502691896226`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.5773502691896226 Sneg`vc[0, 0, 1, 1, 0, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.577350269189629`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.577350269189629 Sneg`vc[1, 1, 0, 0, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{"0.46708617948136105`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.46708617948136105` Sneg`vc[0, 0, 0, 1, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.46708617948136105`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.46708617948136105` Sneg`vc[0, 0, 1, 0, 0, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.25231131935570844`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.25231131935570844` Sneg`vc[0, 0, 1, 1, 0, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.4670861794813545`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.4670861794813545 Sneg`vc[0, 1, 0, 0, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.4670861794813545`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.4670861794813545 Sneg`vc[1, 0, 0, 0, 0, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.2523113193557057`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.2523113193557057 Sneg`vc[1, 1, 0, 0, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.3908744949042897`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.3908744949042897) Sneg`vc[0, 0, 0, 0, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.3797415637214229`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.3797415637214229 Sneg`vc[0, 0, 0, 1, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.3797415637214229`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.3797415637214229 Sneg`vc[0, 0, 1, 0, 0, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.19543724745214375`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.19543724745214375` Sneg`vc[0, 0, 1, 1, 0, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.37974156372142864`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.37974156372142864` Sneg`vc[0, 1, 0, 0, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.3114571182198279`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.3114571182198279 Sneg`vc[0, 1, 1, 0, 0, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.37974156372142864`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.37974156372142864` Sneg`vc[1, 0, 0, 0, 0, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.3114571182198279`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.3114571182198279 Sneg`vc[1, 0, 0, 1, 0, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.19543724745214686`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.19543724745214686` Sneg`vc[1, 1, 0, 0, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.12131114644673982`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.12131114644673982`) Sneg`vc[0, 0, 0, 0, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.21218718361497602`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.21218718361497602` Sneg`vc[0, 0, 0, 1, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.21218718361497602`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.21218718361497602` Sneg`vc[0, 0, 1, 0, 0, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.06065557322336955`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.06065557322336955 Sneg`vc[0, 0, 1, 1, 0, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.21218718361497615`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.21218718361497615` Sneg`vc[0, 1, 0, 0, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.6315978962361433`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6315978962361433 Sneg`vc[0, 1, 1, 0, 0, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.21218718361497615`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.21218718361497615` Sneg`vc[1, 0, 0, 0, 0, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.6315978962361433`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6315978962361433 Sneg`vc[1, 0, 0, 1, 0, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.060655573223370146`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.060655573223370146` Sneg`vc[1, 1, 0, 0, 0, 0]]}]}], "}"}]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}]},
     {
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {
           RowBox[{"-", "1"}]},
          {"1"}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}], 
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {
           RowBox[{"{", 
            RowBox[{"0.11708203932499374`", ",", "0.1`", ",", 
             RowBox[{"-", "0.017082039324993567`"}]}], "}"}]},
          {
           RowBox[{"{", 
            RowBox[{
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.6605596098195698`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.6605596098195698) Sneg`vc[0, 0, 1, 0, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.6605596098195701`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6605596098195701 Sneg`vc[1, 0, 0, 0, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.3568220897730899`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.3568220897730899 Sneg`vc[1, 0, 1, 0, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.7071067811865476`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.7071067811865476) Sneg`vc[0, 0, 1, 0, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.7071067811865475`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.7071067811865475 Sneg`vc[1, 0, 0, 0, 1, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.2523113193557069`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.2523113193557069) Sneg`vc[0, 0, 1, 0, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.252311319355707`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.252311319355707 Sneg`vc[1, 0, 0, 0, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.9341723589627158`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.9341723589627158 Sneg`vc[1, 0, 1, 0, 0, 0]]}]}], "}"}]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}]},
     {
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {"0"},
          {
           FractionBox["1", "2"]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}], 
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {
           RowBox[{"{", 
            RowBox[{
            "0.22124753089009055`", ",", "0.21708203932499362`", ",", 
             "0.12288837253376832`", ",", "0.11708203932499371`", ",", 
             "0.10000000000000007`", ",", "0.08291796067500637`", ",", 
             RowBox[{"-", "0.04413590342385851`"}], ",", 
             RowBox[{"-", "0.01708203932499372`"}]}], "}"}]},
          {
           RowBox[{"{", 
            RowBox[{
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.21218718361497552`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.21218718361497552`) Sneg`vc[0, 0, 1, 0, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.6315978962361409`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6315978962361409 Sneg`vc[0, 0, 1, 1, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.21218718361497654`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.21218718361497654` Sneg`vc[1, 0, 0, 0, 1, 1]], "-", 
              RowBox[{"0.06065557322337014`", " ", 
               RowBox[{"(", 
                RowBox[{
                 TagBox[
                  RowBox[{
                   TagBox[
                    StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                  DisplayForm], "+", 
                 TagBox[
                  RowBox[{
                   TagBox[
                    StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                  DisplayForm], "-", 
                 InterpretationBox[
                  RowBox[{"2", 
                   TagBox[
                    RowBox[{
                    TagBox[
                    StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                    TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                    TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                    TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                    TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                    TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                    TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                    TagBox[
                    StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                    DisplayForm]}],
                  2 Sneg`vc[1, 0, 1, 0, 0, 1]]}], ")"}]}], "+", 
              InterpretationBox[
               RowBox[{"0.21218718361497535`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.21218718361497535` Sneg`vc[1, 0, 1, 1, 0, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.6315978962361458`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6315978962361458 Sneg`vc[1, 1, 0, 0, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.2121871836149766`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.2121871836149766 Sneg`vc[1, 1, 1, 0, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.17841104488654594`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.17841104488654594`) Sneg`vc[0, 0, 1, 0, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.6605596098195725`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6605596098195725 Sneg`vc[0, 0, 1, 1, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.178411044886544`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.178411044886544 Sneg`vc[1, 0, 0, 0, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.17841104488654544`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.17841104488654544` Sneg`vc[1, 0, 1, 1, 0, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.6605596098195675`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6605596098195675 Sneg`vc[1, 1, 0, 0, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.17841104488654413`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.17841104488654413` Sneg`vc[1, 1, 1, 0, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{"0.37974156372142015`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.37974156372142015` Sneg`vc[0, 0, 1, 0, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.3114571182198283`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.3114571182198283 Sneg`vc[0, 0, 1, 1, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.3797415637214334`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.3797415637214334 Sneg`vc[1, 0, 0, 0, 1, 1]], "+", 
              RowBox[{"0.195437247452145`", " ", 
               RowBox[{"(", 
                RowBox[{
                 TagBox[
                  RowBox[{
                   TagBox[
                    StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                  DisplayForm], "+", 
                 TagBox[
                  RowBox[{
                   TagBox[
                    StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                  DisplayForm], "-", 
                 InterpretationBox[
                  RowBox[{"2", 
                   TagBox[
                    RowBox[{
                    TagBox[
                    StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                    TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                    TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                    TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                    TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                    TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                    TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                    TagBox[
                    StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                    DisplayForm]}],
                  2 Sneg`vc[1, 0, 1, 0, 0, 1]]}], ")"}]}], "-", 
              InterpretationBox[
               RowBox[{"0.3797415637214333`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.3797415637214333 Sneg`vc[1, 0, 1, 1, 0, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.31145711821982747`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.31145711821982747` Sneg`vc[1, 1, 0, 0, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.37974156372141615`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.37974156372141615` Sneg`vc[1, 1, 1, 0, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.46708617948136594`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.46708617948136594`) Sneg`vc[0, 0, 1, 0, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.2523113193557077`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.2523113193557077 Sneg`vc[0, 1, 1, 0, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.46708617948135067`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.46708617948135067` Sneg`vc[1, 0, 0, 0, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.2523113193557077`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.2523113193557077 Sneg`vc[1, 0, 0, 1, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.46708617948135467`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.46708617948135467` Sneg`vc[1, 0, 1, 1, 0, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.46708617948135944`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.46708617948135944` Sneg`vc[1, 1, 1, 0, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.4999999999999903`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.4999999999999903) Sneg`vc[0, 0, 1, 0, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.5000000000000073`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.5000000000000073 Sneg`vc[1, 0, 0, 0, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.5000000000000056`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.5000000000000056 Sneg`vc[1, 0, 1, 1, 0, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.49999999999999684`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.49999999999999684` Sneg`vc[1, 1, 1, 0, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{"0.46708617948136283`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.46708617948136283` Sneg`vc[0, 0, 1, 0, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.25231131935570655`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.25231131935570655` Sneg`vc[0, 0, 1, 1, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.467086179481351`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.467086179481351 Sneg`vc[1, 0, 0, 0, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.46708617948135234`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.46708617948135234` Sneg`vc[1, 0, 1, 1, 0, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.252311319355707`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.252311319355707 Sneg`vc[1, 1, 0, 0, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.4670861794813652`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.4670861794813652 Sneg`vc[1, 1, 1, 0, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.24652169051008407`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.24652169051008407`) Sneg`vc[0, 0, 1, 0, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.06386361233345736`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.06386361233345736 Sneg`vc[0, 0, 1, 1, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.2465216905100876`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.2465216905100876 Sneg`vc[1, 0, 0, 0, 1, 1]], "+", 
              RowBox[{"0.3532588999755564`", " ", 
               RowBox[{"(", 
                RowBox[{
                 TagBox[
                  RowBox[{
                   TagBox[
                    StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                  DisplayForm], "+", 
                 TagBox[
                  RowBox[{
                   TagBox[
                    StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                   TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                   TagBox[
                    StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                  DisplayForm], "-", 
                 InterpretationBox[
                  RowBox[{"2", 
                   TagBox[
                    RowBox[{
                    TagBox[
                    StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                    TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                    TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                    TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                    TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                    TagBox[
                    StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                    StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                    TagBox[
                    StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                    StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                    TagBox[
                    StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                    StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                    DisplayForm]}],
                  2 Sneg`vc[1, 0, 1, 0, 0, 1]]}], ")"}]}], "+", 
              InterpretationBox[
               RowBox[{"0.24652169051008732`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.24652169051008732` Sneg`vc[1, 0, 1, 1, 0, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.06386361233345772`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.06386361233345772 Sneg`vc[1, 1, 0, 0, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.24652169051008654`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.24652169051008654` Sneg`vc[1, 1, 1, 0, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{"0.1784110448865481`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.1784110448865481 Sneg`vc[0, 0, 1, 0, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.6605596098195697`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6605596098195697 Sneg`vc[0, 1, 1, 0, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.1784110448865434`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.1784110448865434 Sneg`vc[1, 0, 0, 0, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.6605596098195697`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6605596098195697 Sneg`vc[1, 0, 0, 1, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.17841104488654266`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.17841104488654266` Sneg`vc[1, 0, 1, 1, 0, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.1784110448865478`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.1784110448865478 Sneg`vc[1, 1, 1, 0, 0, 0]]}]}], "}"}]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}]},
     {
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {"0"},
          {
           FractionBox["3", "2"]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}], 
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {
           RowBox[{"{", "0", "}"}]},
          {
           RowBox[{"{", 
            InterpretationBox[
             RowBox[{"\<\"-\"\>", 
              TagBox[
               RowBox[{
                TagBox[
                 StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                  FontColor->RGBColor[0, 1, 0]],
                 StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                TagBox[
                 StyleBox["\<\"\[FilledRectangle]\"\>",
                  FontColor->RGBColor[1, 0, 0]],
                 StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                TagBox[
                 StyleBox["\<\"\[EmptyRectangle]\"\>",
                  FontColor->RGBColor[0, 0, 1]],
                 StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                TagBox[
                 StyleBox["\<\"\[FilledRectangle]\"\>",
                  FontColor->RGBColor[1, 0, 0]],
                 StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                TagBox[
                 StyleBox["\<\"\[EmptyRectangle]\"\>",
                  FontColor->RGBColor[0, 0, 1]],
                 StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                TagBox[
                 StyleBox["\<\"\[FilledRectangle]\"\>",
                  FontColor->RGBColor[1, 0, 0]],
                 StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                TagBox[
                 StyleBox["\<\"\[EmptyRectangle]\"\>",
                  FontColor->RGBColor[0, 0, 1]],
                 StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                TagBox[
                 StyleBox["\<\"\[RightAngleBracket]\"\>",
                  FontColor->RGBColor[0, 1, 0]],
                 StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
               DisplayForm]}],
             -Sneg`vc[1, 0, 1, 0, 1, 0]], "}"}]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}]},
     {
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {"1"},
          {"0"}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}], 
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {
           RowBox[{"{", 
            RowBox[{
            "0.24413590342385888`", ",", "0.21708203932499373`", ",", 
             "0.2000000000000001`", ",", "0.08291796067500637`", ",", 
             "0.07711162746623185`", ",", 
             RowBox[{"-", "0.021247530890090432`"}]}], "}"}]},
          {
           RowBox[{"{", 
            RowBox[{
             RowBox[{
              InterpretationBox[
               RowBox[{"0.3532588999755563`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.3532588999755563 Sneg`vc[0, 0, 1, 1, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.06386361233345755`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.06386361233345755 Sneg`vc[0, 1, 1, 0, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.24652169051008624`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.24652169051008624` Sneg`vc[0, 1, 1, 1, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.06386361233345755`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.06386361233345755 Sneg`vc[1, 0, 0, 1, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.24652169051008624`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.24652169051008624` Sneg`vc[1, 0, 1, 1, 0, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.35325889997555626`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.35325889997555626` Sneg`vc[1, 1, 0, 0, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.24652169051008613`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.24652169051008613` Sneg`vc[1, 1, 0, 1, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.24652169051008613`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.24652169051008613` Sneg`vc[1, 1, 1, 0, 0, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.7065177999511129`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.7065177999511129 Sneg`vc[1, 1, 1, 1, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.6605596098195697`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.6605596098195697) Sneg`vc[0, 0, 1, 1, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.17841104488654497`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.17841104488654497` Sneg`vc[0, 1, 1, 1, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.17841104488654497`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.17841104488654497` Sneg`vc[1, 0, 1, 1, 0, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.6605596098195702`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6605596098195702 Sneg`vc[1, 1, 0, 0, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.17841104488654494`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.17841104488654494` Sneg`vc[1, 1, 0, 1, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.17841104488654494`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.17841104488654494` Sneg`vc[1, 1, 1, 0, 0, 1]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.5773502691896261`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.5773502691896261) Sneg`vc[0, 0, 1, 1, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.577350269189626`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.577350269189626 Sneg`vc[1, 1, 0, 0, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.5773502691896255`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.5773502691896255 Sneg`vc[1, 1, 1, 1, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{"0.25231131935570694`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.25231131935570694` Sneg`vc[0, 0, 1, 1, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.4670861794813579`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.4670861794813579 Sneg`vc[0, 1, 1, 1, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.4670861794813579`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.4670861794813579 Sneg`vc[1, 0, 1, 1, 0, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.25231131935570666`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.25231131935570666` Sneg`vc[1, 1, 0, 0, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.4670861794813577`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.4670861794813577 Sneg`vc[1, 1, 0, 1, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.4670861794813577`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.4670861794813577 Sneg`vc[1, 1, 1, 0, 0, 1]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{"0.19543724745214475`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.19543724745214475` Sneg`vc[0, 0, 1, 1, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.31145711821982675`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.31145711821982675` Sneg`vc[0, 1, 1, 0, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.37974156372142615`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.37974156372142615` Sneg`vc[0, 1, 1, 1, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.31145711821982675`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.31145711821982675` Sneg`vc[1, 0, 0, 1, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.37974156372142615`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.37974156372142615` Sneg`vc[1, 0, 1, 1, 0, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.19543724745214464`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.19543724745214464` Sneg`vc[1, 1, 0, 0, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.3797415637214262`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.3797415637214262 Sneg`vc[1, 1, 0, 1, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.3797415637214262`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.3797415637214262 Sneg`vc[1, 1, 1, 0, 0, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.3908744949042907`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.3908744949042907 Sneg`vc[1, 1, 1, 1, 0, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.060655573223369556`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.060655573223369556`) Sneg`vc[0, 0, 1, 1, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.6315978962361439`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6315978962361439 Sneg`vc[0, 1, 1, 0, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.2121871836149754`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.2121871836149754 Sneg`vc[0, 1, 1, 1, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.6315978962361439`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6315978962361439 Sneg`vc[1, 0, 0, 1, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.2121871836149754`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.2121871836149754 Sneg`vc[1, 0, 1, 1, 0, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.06065557322336967`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.06065557322336967 Sneg`vc[1, 1, 0, 0, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.21218718361497538`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.21218718361497538` Sneg`vc[1, 1, 0, 1, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.21218718361497538`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.21218718361497538` Sneg`vc[1, 1, 1, 0, 0, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.12131114644673965`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.12131114644673965` Sneg`vc[1, 1, 1, 1, 0, 0]]}]}], "}"}]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}]},
     {
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {"1"},
          {"1"}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}], 
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {
           RowBox[{"{", 
            RowBox[{"0.1170820393249937`", ",", "0.10000000000000002`", ",", 
             RowBox[{"-", "0.017082039324993595`"}]}], "}"}]},
          {
           RowBox[{"{", 
            RowBox[{
             RowBox[{
              InterpretationBox[
               RowBox[{"0.3568220897730899`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.3568220897730899 Sneg`vc[1, 0, 1, 0, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.6605596098195702`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6605596098195702 Sneg`vc[1, 0, 1, 1, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.6605596098195698`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6605596098195698 Sneg`vc[1, 1, 1, 0, 1, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.7071067811865475`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.7071067811865475) Sneg`vc[1, 0, 1, 1, 1, 0]], "-", 
              InterpretationBox[
               RowBox[{"0.7071067811865476`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.7071067811865476 Sneg`vc[1, 1, 1, 0, 1, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.9341723589627158`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.9341723589627158) Sneg`vc[1, 0, 1, 0, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.25231131935570716`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.25231131935570716` Sneg`vc[1, 0, 1, 1, 1, 0]], "+", 
              InterpretationBox[
               RowBox[{"0.2523113193557066`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.2523113193557066 Sneg`vc[1, 1, 1, 0, 1, 0]]}]}], "}"}]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}]},
     {
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {"2"},
          {
           FractionBox["1", "2"]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}], 
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {
           RowBox[{"{", 
            RowBox[{
            "0.21708203932499348`", ",", "0.1`", ",", 
             "0.08291796067500636`"}], "}"}]},
          {
           RowBox[{"{", 
            RowBox[{
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.252311319355707`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.252311319355707) Sneg`vc[1, 0, 1, 1, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.25231131935570716`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.25231131935570716` Sneg`vc[1, 1, 1, 0, 1, 1]], "+", 
              InterpretationBox[
               RowBox[{"0.9341723589627157`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.9341723589627157 Sneg`vc[1, 1, 1, 1, 1, 0]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{"0.7071067811865467`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.7071067811865467 Sneg`vc[1, 0, 1, 1, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.7071067811865483`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.7071067811865483 Sneg`vc[1, 1, 1, 0, 1, 1]]}], ",", 
             RowBox[{
              InterpretationBox[
               RowBox[{
                RowBox[{"-", "0.6605596098195708`"}], 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               (-0.6605596098195708) Sneg`vc[1, 0, 1, 1, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.6605596098195691`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.6605596098195691 Sneg`vc[1, 1, 1, 0, 1, 1]], "-", 
              InterpretationBox[
               RowBox[{"0.35682208977309005`", 
                TagBox[
                 RowBox[{
                  TagBox[
                   StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[FilledRectangle]\"\>",
                    FontColor->RGBColor[1, 0, 0]],
                   StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                  TagBox[
                   StyleBox["\<\"\[EmptyRectangle]\"\>",
                    FontColor->RGBColor[0, 0, 1]],
                   StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                  TagBox[
                   StyleBox["\<\"\[RightAngleBracket]\"\>",
                    FontColor->RGBColor[0, 1, 0]],
                   StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
                 DisplayForm]}],
               0.35682208977309005` Sneg`vc[1, 1, 1, 1, 1, 0]]}]}], "}"}]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}]},
     {
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {"3"},
          {"0"}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}], 
      RowBox[{"(", "\[NoBreak]", 
       TagBox[GridBox[{
          {
           RowBox[{"{", "0.2`", "}"}]},
          {
           RowBox[{"{", 
            InterpretationBox[
             RowBox[{
              RowBox[{"-", "1.`"}], 
              TagBox[
               RowBox[{
                TagBox[
                 StyleBox["\<\"\[LeftDoubleBracketingBar]\"\>",
                  FontColor->RGBColor[0, 1, 0]],
                 StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ], 
                TagBox[
                 StyleBox["\<\"\[FilledRectangle]\"\>",
                  FontColor->RGBColor[1, 0, 0]],
                 StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                TagBox[
                 StyleBox["\<\"\[FilledRectangle]\"\>",
                  FontColor->RGBColor[0, 0, 1]],
                 StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                TagBox[
                 StyleBox["\<\"\[FilledRectangle]\"\>",
                  FontColor->RGBColor[1, 0, 0]],
                 StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                TagBox[
                 StyleBox["\<\"\[FilledRectangle]\"\>",
                  FontColor->RGBColor[0, 0, 1]],
                 StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                TagBox[
                 StyleBox["\<\"\[FilledRectangle]\"\>",
                  FontColor->RGBColor[1, 0, 0]],
                 StyleForm[#, FontColor -> RGBColor[1, 0, 0]]& ], 
                TagBox[
                 StyleBox["\<\"\[FilledRectangle]\"\>",
                  FontColor->RGBColor[0, 0, 1]],
                 StyleForm[#, FontColor -> RGBColor[0, 0, 1]]& ], 
                TagBox[
                 StyleBox["\<\"\[RightAngleBracket]\"\>",
                  FontColor->RGBColor[0, 1, 0]],
                 StyleForm[#, FontColor -> RGBColor[0, 1, 0]]& ]}],
               DisplayForm]}],
             -Sneg`vc[1, 1, 1, 1, 1, 1]], "}"}]}
         },
         GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
         GridBoxSpacings->{"Columns" -> {
             Offset[0.27999999999999997`], {
              Offset[0.5599999999999999]}, 
             Offset[0.27999999999999997`]}, "Rows" -> {
             Offset[0.2], {
              Offset[0.4]}, 
             Offset[0.2]}}],
        Column], "\[NoBreak]", ")"}]}
    },
    GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
    GridBoxSpacings->{"Columns" -> {
        Offset[0.27999999999999997`], {
         Offset[0.7]}, 
        Offset[0.27999999999999997`]}, "Rows" -> {
        Offset[0.2], {
         Offset[0.4]}, 
        Offset[0.2]}}], "\[NoBreak]", ")"}],
  Function[BoxForm`e$, 
   MatrixForm[BoxForm`e$]]]], "Output",
 CellChangeTimes->{3.799480991451879*^9, 3.7994919702894373`*^9, 
  3.799510918089162*^9, 3.799989179632222*^9, 3.800006993668779*^9, 
  3.8000070846897497`*^9, 3.801743482849677*^9, 3.801743605423217*^9},
 CellLabel->
  "Out[19]//MatrixForm=",ExpressionUUID->"51784659-80fb-4a77-a14d-\
b9bc7255859a"]
}, Open  ]],

Cell[CellGroupData[{

Cell[BoxData[
 RowBox[{
  RowBox[{"eig2", "[", 
   RowBox[{"[", 
    RowBox[{"All", ",", "2", ",", "1"}], "]"}], "]"}], "//", 
  "MatrixForm"}]], "Input",
 CellChangeTimes->{{3.798810846926331*^9, 3.798810855206966*^9}, {
  3.798810885856196*^9, 3.798810890143249*^9}, {3.799040797491753*^9, 
  3.799040805775058*^9}, {3.799040856533128*^9, 3.799040947644174*^9}, {
  3.799041001308765*^9, 3.799041110885405*^9}, {3.799481042970768*^9, 
  3.7994810564862957`*^9}, {3.799481289367876*^9, 3.7994813351284027`*^9}, {
  3.799481396288725*^9, 3.799481444709128*^9}},
 CellLabel->"In[20]:=",ExpressionUUID->"d880e802-bc0d-4ef4-b0e3-fa0b354395f8"],

Cell[BoxData[
 TagBox[
  RowBox[{"(", "\[NoBreak]", 
   TagBox[GridBox[{
      {
       RowBox[{"{", "0.2`", "}"}]},
      {
       RowBox[{"{", 
        RowBox[{
        "0.2170820393249936`", ",", "0.1`", ",", "0.08291796067500633`"}], 
        "}"}]},
      {
       RowBox[{"{", 
        RowBox[{
        "0.24413590342385888`", ",", "0.2170820393249937`", ",", 
         "0.20000000000000004`", ",", "0.08291796067500631`", ",", 
         "0.07711162746623176`", ",", 
         RowBox[{"-", "0.021247530890090432`"}]}], "}"}]},
      {
       RowBox[{"{", 
        RowBox[{"0.11708203932499374`", ",", "0.1`", ",", 
         RowBox[{"-", "0.017082039324993567`"}]}], "}"}]},
      {
       RowBox[{"{", 
        RowBox[{
        "0.22124753089009055`", ",", "0.21708203932499362`", ",", 
         "0.12288837253376832`", ",", "0.11708203932499371`", ",", 
         "0.10000000000000007`", ",", "0.08291796067500637`", ",", 
         RowBox[{"-", "0.04413590342385851`"}], ",", 
         RowBox[{"-", "0.01708203932499372`"}]}], "}"}]},
      {
       RowBox[{"{", "0", "}"}]},
      {
       RowBox[{"{", 
        RowBox[{
        "0.24413590342385888`", ",", "0.21708203932499373`", ",", 
         "0.2000000000000001`", ",", "0.08291796067500637`", ",", 
         "0.07711162746623185`", ",", 
         RowBox[{"-", "0.021247530890090432`"}]}], "}"}]},
      {
       RowBox[{"{", 
        RowBox[{"0.1170820393249937`", ",", "0.10000000000000002`", ",", 
         RowBox[{"-", "0.017082039324993595`"}]}], "}"}]},
      {
       RowBox[{"{", 
        RowBox[{
        "0.21708203932499348`", ",", "0.1`", ",", "0.08291796067500636`"}], 
        "}"}]},
      {
       RowBox[{"{", "0.2`", "}"}]}
     },
     GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
     GridBoxSpacings->{"Columns" -> {
         Offset[0.27999999999999997`], {
          Offset[0.5599999999999999]}, 
         Offset[0.27999999999999997`]}, "Rows" -> {
         Offset[0.2], {
          Offset[0.4]}, 
         Offset[0.2]}}],
    Column], "\[NoBreak]", ")"}],
  Function[BoxForm`e$, 
   MatrixForm[BoxForm`e$]]]], "Output",
 CellChangeTimes->{3.799481482107175*^9, 3.7994919703488417`*^9, 
  3.799510918118965*^9, 3.799989179690496*^9, 3.800006993804429*^9, 
  3.800007088242066*^9, 3.8017435138126707`*^9, 3.801743608793006*^9},
 CellLabel->
  "Out[20]//MatrixForm=",ExpressionUUID->"f4432ca6-8cbb-4ec3-a8a2-\
51f7f0de9e9d"]
}, Open  ]],

Cell[CellGroupData[{

Cell[BoxData[{
 RowBox[{
  RowBox[{
   RowBox[{"eigtable1", " ", "=", " ", 
    RowBox[{
     RowBox[{"eig2", "[", 
      RowBox[{"[", 
       RowBox[{"All", ",", "2", ",", "1"}], "]"}], "]"}], "-", 
     RowBox[{
      FractionBox["1", "2"], " ", 
      RowBox[{"(", 
       RowBox[{"u", "-", 
        SqrtBox[
         RowBox[{
          SuperscriptBox["u", "2"], "+", 
          RowBox[{"16", " ", "\[Gamma]"}]}]]}], ")"}]}]}]}], ";"}], 
  " "}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
   RowBox[{"eigtable1", "//", "FullSimplify"}], "//", "Expand"}], "//", 
  "MatrixForm"}]}], "Input",
 CellChangeTimes->{{3.799481489329638*^9, 3.799481527815613*^9}, {
  3.799481715830717*^9, 3.799481719217739*^9}, {3.799481875641718*^9, 
  3.799481877307747*^9}, {3.799491996629983*^9, 3.79949200875821*^9}, {
  3.799989357754026*^9, 3.799989401435581*^9}, {3.800007099536186*^9, 
  3.800007124932228*^9}},
 CellLabel->"In[37]:=",ExpressionUUID->"ba9da20b-d1f6-42b2-bdf9-5771fa9973e5"],

Cell[BoxData[
 TagBox[
  RowBox[{"(", "\[NoBreak]", 
   TagBox[GridBox[{
      {
       RowBox[{"{", 
        RowBox[{
         FractionBox["u", "2"], "+", 
         RowBox[{
          FractionBox["1", "2"], " ", 
          SqrtBox[
           RowBox[{
            SuperscriptBox["u", "2"], "+", 
            RowBox[{"16", " ", "\[Gamma]"}]}]]}]}], "}"}]},
      {
       RowBox[{"{", 
        RowBox[{
         RowBox[{
          RowBox[{
           RowBox[{"-", 
            FractionBox["1", "2"]}], " ", 
           SqrtBox[
            RowBox[{
             SuperscriptBox["u", "2"], "+", 
             RowBox[{"4", " ", "\[Gamma]"}]}]]}], "+", 
          RowBox[{
           FractionBox["1", "2"], " ", 
           SqrtBox[
            RowBox[{
             SuperscriptBox["u", "2"], "+", 
             RowBox[{"16", " ", "\[Gamma]"}]}]]}]}], ",", 
         RowBox[{
          RowBox[{
           FractionBox["1", "2"], " ", 
           SqrtBox[
            RowBox[{
             SuperscriptBox["u", "2"], "+", 
             RowBox[{"4", " ", "\[Gamma]"}]}]]}], "+", 
          RowBox[{
           FractionBox["1", "2"], " ", 
           SqrtBox[
            RowBox[{
             SuperscriptBox["u", "2"], "+", 
             RowBox[{"16", " ", "\[Gamma]"}]}]]}]}]}], "}"}]},
      {
       RowBox[{"{", 
        RowBox[{
         RowBox[{
          FractionBox["u", "2"], "+", 
          RowBox[{
           FractionBox["1", "2"], " ", 
           SqrtBox[
            RowBox[{
             SuperscriptBox["u", "2"], "+", 
             RowBox[{"16", " ", "\[Gamma]"}]}]]}]}], ",", "0", ",", 
         SqrtBox[
          RowBox[{
           SuperscriptBox["u", "2"], "+", 
           RowBox[{"16", " ", "\[Gamma]"}]}]]}], "}"}]},
      {
       RowBox[{"{", 
        RowBox[{
         RowBox[{"-", 
          FractionBox["u", "2"]}], "+", 
         RowBox[{
          FractionBox["1", "2"], " ", 
          SqrtBox[
           RowBox[{
            SuperscriptBox["u", "2"], "+", 
            RowBox[{"16", " ", "\[Gamma]"}]}]]}]}], "}"}]},
      {
       RowBox[{"{", 
        RowBox[{
         RowBox[{
          RowBox[{
           RowBox[{"-", 
            FractionBox["1", "2"]}], " ", 
           SqrtBox[
            RowBox[{
             SuperscriptBox["u", "2"], "+", 
             RowBox[{"4", " ", "\[Gamma]"}]}]]}], "+", 
          RowBox[{
           FractionBox["1", "2"], " ", 
           SqrtBox[
            RowBox[{
             SuperscriptBox["u", "2"], "+", 
             RowBox[{"16", " ", "\[Gamma]"}]}]]}]}], ",", 
         RowBox[{
          RowBox[{
           FractionBox["1", "2"], " ", 
           SqrtBox[
            RowBox[{
             SuperscriptBox["u", "2"], "+", 
             RowBox[{"4", " ", "\[Gamma]"}]}]]}], "+", 
          RowBox[{
           FractionBox["1", "2"], " ", 
           SqrtBox[
            RowBox[{
             SuperscriptBox["u", "2"], "+", 
             RowBox[{"16", " ", "\[Gamma]"}]}]]}]}]}], "}"}]},
      {
       RowBox[{"{", 
        RowBox[{
         FractionBox["u", "2"], "+", 
         RowBox[{
          FractionBox["1", "2"], " ", 
          SqrtBox[
           RowBox[{
            SuperscriptBox["u", "2"], "+", 
            RowBox[{"16", " ", "\[Gamma]"}]}]]}]}], "}"}]}
     },
     GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
     GridBoxSpacings->{"Columns" -> {
         Offset[0.27999999999999997`], {
          Offset[0.5599999999999999]}, 
         Offset[0.27999999999999997`]}, "Rows" -> {
         Offset[0.2], {
          Offset[0.4]}, 
         Offset[0.2]}}],
    Column], "\[NoBreak]", ")"}],
  Function[BoxForm`e$, 
   MatrixForm[BoxForm`e$]]]], "Output",
 CellChangeTimes->{
  3.799481528287352*^9, 3.79948171997867*^9, 3.7994818780350943`*^9, 
   3.799491970968091*^9, 3.799492009418695*^9, 3.799510918337222*^9, 
   3.799989179944807*^9, {3.799989358622126*^9, 3.799989403476481*^9}, 
   3.80000699445522*^9, {3.8000071038014193`*^9, 3.8000071266078453`*^9}},
 CellLabel->
  "Out[38]//MatrixForm=",ExpressionUUID->"25032da5-7361-46e1-a3e6-\
aa32be42b3b8"]
}, Open  ]],

Cell[CellGroupData[{

Cell[BoxData[{
 RowBox[{
  RowBox[{"faktor", " ", "=", " ", 
   RowBox[{"2", " ", "/", " ", 
    RowBox[{"(", " ", 
     RowBox[{"1", " ", "+", " ", 
      RowBox[{"\[CapitalLambda]", "^", 
       RowBox[{"(", 
        RowBox[{"-", "1"}], ")"}]}]}], " ", ")"}]}]}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"eigtable1ugamma", " ", "=", " ", 
   RowBox[{"eigtable1", "//.", 
    RowBox[{"{", 
     RowBox[{
      RowBox[{"u", " ", "\[Rule]", " ", 
       RowBox[{"U", " ", 
        RowBox[{"faktor", "/", "2"}]}]}], " ", ",", 
      RowBox[{"\[Gamma]", "\[Rule]", 
       RowBox[{"2", " ", 
        RowBox[{"\[CapitalGamma]", " ", "/", "Pi"}], " ", 
        RowBox[{"faktor", "^", "2"}]}]}]}], "}"}]}]}], ";", 
  RowBox[{"MatrixForm", "[", "eigtable1ugamma", "]"}]}]}], "Input",
 CellChangeTimes->{{3.7994920173076563`*^9, 3.79949204677073*^9}, {
  3.7995109051387568`*^9, 3.799510913663443*^9}, {3.799511027723482*^9, 
  3.7995110306738253`*^9}, {3.799989462501636*^9, 3.7999894679817867`*^9}, {
  3.80000715113246*^9, 3.800007372238921*^9}, {3.800007508344883*^9, 
  3.8000075117225323`*^9}},
 CellLabel->"In[58]:=",ExpressionUUID->"51cdd7f9-ce25-4543-9dc6-dde1de6b8c45"],

Cell[BoxData[
 TagBox[
  RowBox[{"(", "\[NoBreak]", 
   TagBox[GridBox[{
      {
       RowBox[{"{", 
        RowBox[{
         RowBox[{
          FractionBox["1", "2"], " ", 
          RowBox[{"(", 
           RowBox[{
            SqrtBox[
             RowBox[{
              FractionBox[
               SuperscriptBox["U", "2"], 
               SuperscriptBox[
                RowBox[{"(", 
                 RowBox[{"1", "+", 
                  FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]], "+", 
              FractionBox[
               RowBox[{"128", " ", "\[CapitalGamma]"}], 
               RowBox[{"\[Pi]", " ", 
                SuperscriptBox[
                 RowBox[{"(", 
                  RowBox[{"1", "+", 
                   FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]}]]}]], 
            "-", 
            FractionBox["U", 
             RowBox[{"1", "+", 
              FractionBox["1", "\[CapitalLambda]"]}]]}], ")"}]}], "+", 
         FractionBox["U", 
          RowBox[{"1", "+", 
           FractionBox["1", "\[CapitalLambda]"]}]]}], "}"}]},
      {
       RowBox[{"{", 
        RowBox[{
         RowBox[{
          RowBox[{
           FractionBox["1", "2"], " ", 
           RowBox[{"(", 
            RowBox[{
             SqrtBox[
              RowBox[{
               FractionBox[
                SuperscriptBox["U", "2"], 
                SuperscriptBox[
                 RowBox[{"(", 
                  RowBox[{"1", "+", 
                   FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]], "+", 
               
               FractionBox[
                RowBox[{"128", " ", "\[CapitalGamma]"}], 
                RowBox[{"\[Pi]", " ", 
                 SuperscriptBox[
                  RowBox[{"(", 
                   RowBox[{"1", "+", 
                    FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]}]]}]],
              "-", 
             FractionBox["U", 
              RowBox[{"1", "+", 
               FractionBox["1", "\[CapitalLambda]"]}]]}], ")"}]}], "+", 
          RowBox[{
           FractionBox["1", "2"], " ", 
           RowBox[{"(", 
            RowBox[{
             RowBox[{"-", 
              SqrtBox[
               RowBox[{
                FractionBox[
                 SuperscriptBox["U", "2"], 
                 SuperscriptBox[
                  RowBox[{"(", 
                   RowBox[{"1", "+", 
                    FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]], "+", 
                FractionBox[
                 RowBox[{"32", " ", "\[CapitalGamma]"}], 
                 RowBox[{"\[Pi]", " ", 
                  SuperscriptBox[
                   RowBox[{"(", 
                    RowBox[{"1", "+", 
                    FractionBox["1", "\[CapitalLambda]"]}], ")"}], 
                   "2"]}]]}]]}], "+", 
             FractionBox["U", 
              RowBox[{"1", "+", 
               FractionBox["1", "\[CapitalLambda]"]}]]}], ")"}]}]}], ",", 
         RowBox[{
          RowBox[{
           FractionBox["1", "2"], " ", 
           RowBox[{"(", 
            RowBox[{
             SqrtBox[
              RowBox[{
               FractionBox[
                SuperscriptBox["U", "2"], 
                SuperscriptBox[
                 RowBox[{"(", 
                  RowBox[{"1", "+", 
                   FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]], "+", 
               
               FractionBox[
                RowBox[{"128", " ", "\[CapitalGamma]"}], 
                RowBox[{"\[Pi]", " ", 
                 SuperscriptBox[
                  RowBox[{"(", 
                   RowBox[{"1", "+", 
                    FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]}]]}]],
              "-", 
             FractionBox["U", 
              RowBox[{"1", "+", 
               FractionBox["1", "\[CapitalLambda]"]}]]}], ")"}]}], "+", 
          RowBox[{
           FractionBox["1", "2"], " ", 
           RowBox[{"(", 
            RowBox[{
             SqrtBox[
              RowBox[{
               FractionBox[
                SuperscriptBox["U", "2"], 
                SuperscriptBox[
                 RowBox[{"(", 
                  RowBox[{"1", "+", 
                   FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]], "+", 
               
               FractionBox[
                RowBox[{"32", " ", "\[CapitalGamma]"}], 
                RowBox[{"\[Pi]", " ", 
                 SuperscriptBox[
                  RowBox[{"(", 
                   RowBox[{"1", "+", 
                    FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]}]]}]],
              "+", 
             FractionBox["U", 
              RowBox[{"1", "+", 
               FractionBox["1", "\[CapitalLambda]"]}]]}], ")"}]}]}]}], 
        "}"}]},
      {
       RowBox[{"{", 
        RowBox[{
         RowBox[{
          RowBox[{
           FractionBox["1", "2"], " ", 
           RowBox[{"(", 
            RowBox[{
             SqrtBox[
              RowBox[{
               FractionBox[
                SuperscriptBox["U", "2"], 
                SuperscriptBox[
                 RowBox[{"(", 
                  RowBox[{"1", "+", 
                   FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]], "+", 
               
               FractionBox[
                RowBox[{"128", " ", "\[CapitalGamma]"}], 
                RowBox[{"\[Pi]", " ", 
                 SuperscriptBox[
                  RowBox[{"(", 
                   RowBox[{"1", "+", 
                    FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]}]]}]],
              "-", 
             FractionBox["U", 
              RowBox[{"1", "+", 
               FractionBox["1", "\[CapitalLambda]"]}]]}], ")"}]}], "+", 
          FractionBox["U", 
           RowBox[{"1", "+", 
            FractionBox["1", "\[CapitalLambda]"]}]]}], ",", 
         RowBox[{
          RowBox[{
           FractionBox["1", "2"], " ", 
           RowBox[{"(", 
            RowBox[{
             SqrtBox[
              RowBox[{
               FractionBox[
                SuperscriptBox["U", "2"], 
                SuperscriptBox[
                 RowBox[{"(", 
                  RowBox[{"1", "+", 
                   FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]], "+", 
               
               FractionBox[
                RowBox[{"128", " ", "\[CapitalGamma]"}], 
                RowBox[{"\[Pi]", " ", 
                 SuperscriptBox[
                  RowBox[{"(", 
                   RowBox[{"1", "+", 
                    FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]}]]}]],
              "-", 
             FractionBox["U", 
              RowBox[{"1", "+", 
               FractionBox["1", "\[CapitalLambda]"]}]]}], ")"}]}], "+", 
          RowBox[{
           FractionBox["1", "2"], " ", 
           RowBox[{"(", 
            RowBox[{
             RowBox[{"-", 
              SqrtBox[
               RowBox[{
                FractionBox[
                 SuperscriptBox["U", "2"], 
                 SuperscriptBox[
                  RowBox[{"(", 
                   RowBox[{"1", "+", 
                    FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]], "+", 
                FractionBox[
                 RowBox[{"128", " ", "\[CapitalGamma]"}], 
                 RowBox[{"\[Pi]", " ", 
                  SuperscriptBox[
                   RowBox[{"(", 
                    RowBox[{"1", "+", 
                    FractionBox["1", "\[CapitalLambda]"]}], ")"}], 
                   "2"]}]]}]]}], "+", 
             FractionBox["U", 
              RowBox[{"1", "+", 
               FractionBox["1", "\[CapitalLambda]"]}]]}], ")"}]}]}], ",", 
         RowBox[{
          RowBox[{
           FractionBox["1", "2"], " ", 
           RowBox[{"(", 
            RowBox[{
             SqrtBox[
              RowBox[{
               FractionBox[
                SuperscriptBox["U", "2"], 
                SuperscriptBox[
                 RowBox[{"(", 
                  RowBox[{"1", "+", 
                   FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]], "+", 
               
               FractionBox[
                RowBox[{"128", " ", "\[CapitalGamma]"}], 
                RowBox[{"\[Pi]", " ", 
                 SuperscriptBox[
                  RowBox[{"(", 
                   RowBox[{"1", "+", 
                    FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]}]]}]],
              "-", 
             FractionBox["U", 
              RowBox[{"1", "+", 
               FractionBox["1", "\[CapitalLambda]"]}]]}], ")"}]}], "+", 
          RowBox[{
           FractionBox["1", "2"], " ", 
           RowBox[{"(", 
            RowBox[{
             SqrtBox[
              RowBox[{
               FractionBox[
                SuperscriptBox["U", "2"], 
                SuperscriptBox[
                 RowBox[{"(", 
                  RowBox[{"1", "+", 
                   FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]], "+", 
               
               FractionBox[
                RowBox[{"128", " ", "\[CapitalGamma]"}], 
                RowBox[{"\[Pi]", " ", 
                 SuperscriptBox[
                  RowBox[{"(", 
                   RowBox[{"1", "+", 
                    FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]}]]}]],
              "+", 
             FractionBox["U", 
              RowBox[{"1", "+", 
               FractionBox["1", "\[CapitalLambda]"]}]]}], ")"}]}]}]}], 
        "}"}]},
      {
       RowBox[{"{", 
        RowBox[{
         FractionBox["1", "2"], " ", 
         RowBox[{"(", 
          RowBox[{
           SqrtBox[
            RowBox[{
             FractionBox[
              SuperscriptBox["U", "2"], 
              SuperscriptBox[
               RowBox[{"(", 
                RowBox[{"1", "+", 
                 FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]], "+", 
             FractionBox[
              RowBox[{"128", " ", "\[CapitalGamma]"}], 
              RowBox[{"\[Pi]", " ", 
               SuperscriptBox[
                RowBox[{"(", 
                 RowBox[{"1", "+", 
                  FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]}]]}]], 
           "-", 
           FractionBox["U", 
            RowBox[{"1", "+", 
             FractionBox["1", "\[CapitalLambda]"]}]]}], ")"}]}], "}"}]},
      {
       RowBox[{"{", 
        RowBox[{
         RowBox[{
          RowBox[{
           FractionBox["1", "2"], " ", 
           RowBox[{"(", 
            RowBox[{
             SqrtBox[
              RowBox[{
               FractionBox[
                SuperscriptBox["U", "2"], 
                SuperscriptBox[
                 RowBox[{"(", 
                  RowBox[{"1", "+", 
                   FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]], "+", 
               
               FractionBox[
                RowBox[{"128", " ", "\[CapitalGamma]"}], 
                RowBox[{"\[Pi]", " ", 
                 SuperscriptBox[
                  RowBox[{"(", 
                   RowBox[{"1", "+", 
                    FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]}]]}]],
              "-", 
             FractionBox["U", 
              RowBox[{"1", "+", 
               FractionBox["1", "\[CapitalLambda]"]}]]}], ")"}]}], "+", 
          RowBox[{
           FractionBox["1", "2"], " ", 
           RowBox[{"(", 
            RowBox[{
             RowBox[{"-", 
              SqrtBox[
               RowBox[{
                FractionBox[
                 SuperscriptBox["U", "2"], 
                 SuperscriptBox[
                  RowBox[{"(", 
                   RowBox[{"1", "+", 
                    FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]], "+", 
                FractionBox[
                 RowBox[{"32", " ", "\[CapitalGamma]"}], 
                 RowBox[{"\[Pi]", " ", 
                  SuperscriptBox[
                   RowBox[{"(", 
                    RowBox[{"1", "+", 
                    FractionBox["1", "\[CapitalLambda]"]}], ")"}], 
                   "2"]}]]}]]}], "+", 
             FractionBox["U", 
              RowBox[{"1", "+", 
               FractionBox["1", "\[CapitalLambda]"]}]]}], ")"}]}]}], ",", 
         RowBox[{
          RowBox[{
           FractionBox["1", "2"], " ", 
           RowBox[{"(", 
            RowBox[{
             SqrtBox[
              RowBox[{
               FractionBox[
                SuperscriptBox["U", "2"], 
                SuperscriptBox[
                 RowBox[{"(", 
                  RowBox[{"1", "+", 
                   FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]], "+", 
               
               FractionBox[
                RowBox[{"128", " ", "\[CapitalGamma]"}], 
                RowBox[{"\[Pi]", " ", 
                 SuperscriptBox[
                  RowBox[{"(", 
                   RowBox[{"1", "+", 
                    FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]}]]}]],
              "-", 
             FractionBox["U", 
              RowBox[{"1", "+", 
               FractionBox["1", "\[CapitalLambda]"]}]]}], ")"}]}], "+", 
          RowBox[{
           FractionBox["1", "2"], " ", 
           RowBox[{"(", 
            RowBox[{
             SqrtBox[
              RowBox[{
               FractionBox[
                SuperscriptBox["U", "2"], 
                SuperscriptBox[
                 RowBox[{"(", 
                  RowBox[{"1", "+", 
                   FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]], "+", 
               
               FractionBox[
                RowBox[{"32", " ", "\[CapitalGamma]"}], 
                RowBox[{"\[Pi]", " ", 
                 SuperscriptBox[
                  RowBox[{"(", 
                   RowBox[{"1", "+", 
                    FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]}]]}]],
              "+", 
             FractionBox["U", 
              RowBox[{"1", "+", 
               FractionBox["1", "\[CapitalLambda]"]}]]}], ")"}]}]}]}], 
        "}"}]},
      {
       RowBox[{"{", 
        RowBox[{
         RowBox[{
          FractionBox["1", "2"], " ", 
          RowBox[{"(", 
           RowBox[{
            SqrtBox[
             RowBox[{
              FractionBox[
               SuperscriptBox["U", "2"], 
               SuperscriptBox[
                RowBox[{"(", 
                 RowBox[{"1", "+", 
                  FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]], "+", 
              FractionBox[
               RowBox[{"128", " ", "\[CapitalGamma]"}], 
               RowBox[{"\[Pi]", " ", 
                SuperscriptBox[
                 RowBox[{"(", 
                  RowBox[{"1", "+", 
                   FractionBox["1", "\[CapitalLambda]"]}], ")"}], "2"]}]]}]], 
            "-", 
            FractionBox["U", 
             RowBox[{"1", "+", 
              FractionBox["1", "\[CapitalLambda]"]}]]}], ")"}]}], "+", 
         FractionBox["U", 
          RowBox[{"1", "+", 
           FractionBox["1", "\[CapitalLambda]"]}]]}], "}"}]}
     },
     GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
     GridBoxSpacings->{"Columns" -> {
         Offset[0.27999999999999997`], {
          Offset[0.5599999999999999]}, 
         Offset[0.27999999999999997`]}, "Rows" -> {
         Offset[0.2], {
          Offset[0.4]}, 
         Offset[0.2]}}],
    Column], "\[NoBreak]", ")"}],
  Function[BoxForm`e$, 
   MatrixForm[BoxForm`e$]]]], "Output",
 CellChangeTimes->{
  3.799492049175294*^9, 3.799510918402709*^9, 3.799511033559387*^9, 
   3.799989179984775*^9, 3.799989469299801*^9, 3.8000069945163803`*^9, {
   3.800007304911592*^9, 3.8000073223440857`*^9}, 3.800007373831056*^9, {
   3.800007501636959*^9, 3.8000075120122013`*^9}},
 CellLabel->
  "Out[59]//MatrixForm=",ExpressionUUID->"1f088be9-8a80-4676-ad86-\
2461b20dc0d7"]
}, Open  ]],

Cell[CellGroupData[{

Cell[BoxData[
 RowBox[{
  RowBox[{
   RowBox[{
    RowBox[{"eigtable1ugamma", "//.", 
     RowBox[{"{", 
      RowBox[{
       RowBox[{"U", "\[Rule]", "0.1"}], ",", 
       RowBox[{"\[CapitalGamma]", "\[Rule]", " ", "0.01"}], ",", 
       RowBox[{"\[CapitalLambda]", "\[Rule]", "2.0"}]}], "}"}]}], "//", 
    "FullSimplify"}], "//", "Expand"}], "//", "MatrixForm"}]], "Input",
 CellChangeTimes->{{3.800007387398293*^9, 3.800007495138351*^9}},
 CellLabel->"In[60]:=",ExpressionUUID->"a4336a45-350f-4988-85ef-95b77aef52d1"],

Cell[BoxData[
 TagBox[
  RowBox[{"(", "\[NoBreak]", 
   TagBox[GridBox[{
      {
       RowBox[{"{", "0.24869779298132738`", "}"}]},
      {
       RowBox[{"{", 
        RowBox[{"0.10387994972306572`", ",", "0.3268489695729224`"}], "}"}]},
      {
       RowBox[{"{", 
        RowBox[{
        "0.24869779298132738`", ",", "0.`", ",", "0.4307289192959881`"}], 
        "}"}]},
      {
       RowBox[{"{", "0.18203112631466073`", "}"}]},
      {
       RowBox[{"{", 
        RowBox[{"0.10387994972306572`", ",", "0.3268489695729224`"}], "}"}]},
      {
       RowBox[{"{", "0.24869779298132738`", "}"}]}
     },
     GridBoxAlignment->{"Columns" -> {{Center}}, "Rows" -> {{Baseline}}},
     GridBoxSpacings->{"Columns" -> {
         Offset[0.27999999999999997`], {
          Offset[0.5599999999999999]}, 
         Offset[0.27999999999999997`]}, "Rows" -> {
         Offset[0.2], {
          Offset[0.4]}, 
         Offset[0.2]}}],
    Column], "\[NoBreak]", ")"}],
  Function[BoxForm`e$, 
   MatrixForm[BoxForm`e$]]]], "Output",
 CellChangeTimes->{{3.8000074081021347`*^9, 3.8000075149083557`*^9}},
 CellLabel->
  "Out[60]//MatrixForm=",ExpressionUUID->"e03bd5fa-5b96-4837-8ba9-\
2e7b8937c44d"]
}, Open  ]]
},
WindowSize->{974.25, 534.75},
WindowMargins->{{0, Automatic}, {0, Automatic}},
Magnification:>0.9 Inherited,
FrontEndVersion->"12.1 for Linux x86 (64-bit) (March 18, 2020)",
StyleDefinitions->"Default.nb",
ExpressionUUID->"7faeaa99-bbf0-48b1-ac6a-b4d43ec864d7"
]
(* End of Notebook Content *)

(* Internal cache information *)
(*CellTagsOutline
CellTagsIndex->{}
*)
(*CellTagsIndex
CellTagsIndex->{}
*)
(*NotebookFileOutline
Notebook[{
Cell[CellGroupData[{
Cell[580, 22, 1235, 25, 160, "Input",ExpressionUUID->"878ff729-664b-4665-a6dd-25a23383ad8a"],
Cell[1818, 49, 736, 12, 20, "Print",ExpressionUUID->"9a65167d-d0c7-476d-989c-1f9b7a985287"]
}, Open  ]],
Cell[CellGroupData[{
Cell[2591, 66, 860, 17, 26, "Input",ExpressionUUID->"56fc288d-44db-4702-8652-34188f9a12a9"],
Cell[3454, 85, 3950, 116, 37, "Output",ExpressionUUID->"df5dbee9-af42-44a3-a5af-a74f530f0314"]
}, Open  ]],
Cell[CellGroupData[{
Cell[7441, 206, 1055, 20, 26, "Input",ExpressionUUID->"5de1ba86-dfaf-4e3d-ae28-09be0688a46d"],
Cell[8499, 228, 4224, 120, 37, "Output",ExpressionUUID->"2f7041f8-0ce9-4d3e-b494-acbf0689790f"]
}, Open  ]],
Cell[CellGroupData[{
Cell[12760, 353, 376, 10, 26, "Input",ExpressionUUID->"817faa84-b2a2-400a-b9a2-2b2cd40b9499"],
Cell[13139, 365, 3667, 111, 37, "Output",ExpressionUUID->"ba78cd25-194a-45fc-a553-d654b2de3e5c"]
}, Open  ]],
Cell[CellGroupData[{
Cell[16843, 481, 371, 9, 26, "Input",ExpressionUUID->"1cff3dbe-d3aa-48ab-bb70-9cb5c9380ed4"],
Cell[17217, 492, 3568, 110, 37, "Output",ExpressionUUID->"9f4b64b5-0658-48c9-a9e1-bb7e896af065"]
}, Open  ]],
Cell[CellGroupData[{
Cell[20822, 607, 387, 6, 26, "Input",ExpressionUUID->"ffa6547e-d552-4139-b069-f1dda5501407"],
Cell[21212, 615, 14888, 447, 62, "Output",ExpressionUUID->"54f29a9b-c066-4ae9-a3ad-bfbab72bfd53"]
}, Open  ]],
Cell[36115, 1065, 583, 12, 26, "Input",ExpressionUUID->"88f20552-f46c-40a0-b7a0-c203ef08a6c5"],
Cell[CellGroupData[{
Cell[36723, 1081, 261, 4, 26, "Input",ExpressionUUID->"e21fac4d-ff26-4d90-9690-6a633fd5dd31"],
Cell[CellGroupData[{
Cell[37009, 1089, 71378, 2027, 251, "Print",ExpressionUUID->"642cec21-30ad-4575-8224-730ad2e67e2e"],
Cell[108390, 3118, 70539, 1696, 206, "Print",ExpressionUUID->"5675e344-88a7-44df-a974-590ad6ae6baa"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[178978, 4820, 258, 4, 26, "Input",ExpressionUUID->"d7fb02cf-12a4-460c-ba6c-327a735938d6"],
Cell[179239, 4826, 12348, 370, 674, "Print",ExpressionUUID->"39402e2b-726e-4325-8545-28e88fb3a3ed"]
}, Open  ]],
Cell[191602, 5199, 791, 15, 46, "Input",ExpressionUUID->"42cc3490-e02a-463f-b616-3b0c23df1ca3"],
Cell[CellGroupData[{
Cell[192418, 5218, 207, 3, 26, "Input",ExpressionUUID->"11c861c6-c985-4639-8ad3-95ace8f2996b"],
Cell[192628, 5223, 339624, 7028, 380, "Output",ExpressionUUID->"51784659-80fb-4a77-a14d-b9bc7255859a"]
}, Open  ]],
Cell[CellGroupData[{
Cell[532289, 12256, 640, 12, 26, "Input",ExpressionUUID->"d880e802-bc0d-4ef4-b0e3-fa0b354395f8"],
Cell[532932, 12270, 2430, 67, 187, "Output",ExpressionUUID->"f4432ca6-8cbb-4ec3-a8a2-51f7f0de9e9d"]
}, Open  ]],
Cell[CellGroupData[{
Cell[535399, 12342, 982, 26, 61, "Input",ExpressionUUID->"ba9da20b-d1f6-42b2-bdf9-5771fa9973e5"],
Cell[536384, 12370, 4079, 129, 178, "Output",ExpressionUUID->"25032da5-7361-46e1-a3e6-aa32be42b3b8"]
}, Open  ]],
Cell[CellGroupData[{
Cell[540500, 12504, 1185, 28, 67, "Input",ExpressionUUID->"51cdd7f9-ce25-4543-9dc6-dde1de6b8c45"],
Cell[541688, 12534, 15707, 440, 262, "Output",ExpressionUUID->"1f088be9-8a80-4676-ad86-2461b20dc0d7"]
}, Open  ]],
Cell[CellGroupData[{
Cell[557432, 12979, 521, 12, 26, "Input",ExpressionUUID->"a4336a45-350f-4988-85ef-95b77aef52d1"],
Cell[557956, 12993, 1193, 36, 121, "Output",ExpressionUUID->"e03bd5fa-5b96-4837-8ba9-2e7b8937c44d"]
}, Open  ]]
}
]
*)

