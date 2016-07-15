function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
alert(mesDelAño)
switch(mesDelAño)
{
	case "Enero":
	case "Febrero":
	
	alert("Hace calor");
	break

	case "Marzo":
	alert("a clases");
	break

	case "Abril":

	alert("El 24 es el cumple de Nico");
	break

	case "Mayo":
	case "Junio":
	case "Julio":
	case "Agosto":
	case "Septiembre":
	case "Octubre":
	case "Noviembre":

	alert("pasa rapido");
	break

	case "Diciembre":
	
	alert("Felicidades");
	break
}



}//FIN DE LA FUNCIÓN