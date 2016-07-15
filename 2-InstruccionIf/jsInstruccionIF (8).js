function Mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;
edad = document.getElementById('edad').value;
estadoCivil = document.getElementById('estadoCivil').value;
if(edad<18)
{
	if(estadoCivil='Soltero')
	{
		alert("Es muy chico para no ser soltero");
	}
	else
	{
		if(estadoCivil='Casado')
			{
				alert("Es muy chico para ser Casado");
			}
	}
}
	


}//FIN DE LA FUNCIÓN