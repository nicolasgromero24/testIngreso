/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var ingreseSueldo
	ingreseSueldo = document.getElementById('ingreseSueldo').value;
	var resultado
	resultado = document.getElementById('resultado').value;
	resultado = (100*0.25);
	alert(resultado);
	
}
