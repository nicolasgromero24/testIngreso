/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
numeroUno = document.getElementById('numeroUno').value;
var numeroDos;
numeroDos = document.getElementById('numeroDos').value;
var resultado = parseInt(numeroUno)+parseInt(numeroDos);
alert("el resultado es : "+resultado);
alert("sumar");
}

function restar()
{
	var numeroUno
	numeroUno = document.getElementById('numeroUno').value;
	var numeroDos;
	numeroDos = document.getElementById('numeroDos').value;
	var resultado = (numeroUno)-(numeroDos);
	alert("el resultado es : "+resultado);
}

function multiplicar()
{ 
var numeroUno
	numeroUno = document.getElementById('numeroUno').value;
	var numeroDos;
	numeroDos = document.getElementById('numeroDos').value;
	var resultado = (numeroUno)*(numeroDos);
	alert("el resultado es : "+resultado);	
}

function dividir()
{
	var numeroUno
	numeroUno = document.getElementById('numeroUno').value;
	var numeroDos;
	numeroDos = document.getElementById('numeroDos').value;
	var resultado = (numeroUno)/(numeroDos);
	alert("el resultado es : "+resultado);
}

