function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);
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
	case "Mayo":
	case "Junio":
	case "Julio":
	case "Agosto":
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	alert("abrigate hace frio");
	break
	
	case "Diciembre":
	alert("Fin de ano");
	break
}



}//FIN DE LA FUNCIÓN