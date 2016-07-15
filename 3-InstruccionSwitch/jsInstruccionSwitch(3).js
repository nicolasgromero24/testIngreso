function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño)
{
	case "Febrero":
	alert("Este mes no tiene mas de 29 dias");
	break 

	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":	
	alert("Este mes tiene mas de 30 dias");
	break	
}
	
	


}//FIN DE LA FUNCIÓN