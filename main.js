var x=0;
function even(){
  x=x+2;
  document.getElementById("p1").innerHTML="Even = "+ x;
  
}
var y=1
function odd(){
  y=y+2;
  document.getElementById("p1").innerHTML="Odd = "+ y;
}
var number=0;
var answers=0;
function square(){
  number=Number(document.getElementById("num1").value);
  answers=number*number;
  document.getElementById("p2").innerHTML="Square Root = "+ answers;
}
var number1=0;
var answer1=0;
function cube(){
  number1=Number(document.getElementById("num1").value);
  answer1=number*number*number;
  document.getElementById("p2").innerHTML="Cube Root = "+ answer1;
}
var number=0;
var area=0;
var perimeter1=0;

function areaofsquare(){
  number=Number(document.getElementById("num").value);
 
  area=number*number;
 
  document.getElementById("answer").innerHTML="Area of Square = "+ area;
}
function perimeter(){
  number=Number(document.getElementById("num").value);
  perimeter1=4*number;
  document.getElementById("answer").innerHTML="Perimeter = "+ perimeter1;
}
var answer5=0;
var width=0;
var length=0;
var plus=0;

function perimeterofrectangle(){
 width=Number(document.getElementById("width").value);
  length=Number(document.getElementById("length").value);
  plus=length+width;
  answer5=2*plus;
  
  document.getElementById("answer5").innerHTML="Answer = "+ answer5;
}
var base=0;
var height=0;
var answer7=0;
function areaoftriangle(){
  base=Number(document.getElementById("base").value);
  height=Number(document.getElementById("height").value);
  answer7=0.5 *base*height;
  document.getElementById("answer7").innerHTML="Answer = "+ answer7;
}



