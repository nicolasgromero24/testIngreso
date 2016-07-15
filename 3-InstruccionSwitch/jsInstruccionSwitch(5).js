function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

//alert (laHora);
switch(laHora)
{
	case "7":
	case "8":
	case "9":
	case "10":
	case "11":
	alert("Todavia es temprano");
	break

	case "12":
	case "13":
	case "14":
	case "15":
	case "16":
	case "17":
	case "18":
	case "19":
	alert("Ya es de Tarde");
	break

	case "20":
	case "21":
	case "22":
	case "23":
	case "24":
	alert("Ya es de Noche");
	break
}
	
	



}//FIN DE LA FUNCIÓN