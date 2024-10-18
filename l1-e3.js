const art1 = parseInt(prompt("ingrese el precio del primer articulo:"));
const art2 = parseInt(prompt("ingrese el precio del segundo articulo:"));
const art3 = parseInt(prompt("ingrese el precio del tercer articulo:"));
const art4 = parseInt(prompt("ingrese el precio del cuarto articulo:"));

op1 = art1+art2+art3+art4;
op2 = op1-0.10;

document.write("el total a pagar es:"+op2);