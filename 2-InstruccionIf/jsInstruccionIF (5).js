function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
/*
 if(edad>12)
	{

		if(edad<18)
		{
			alert("es adolecente")
		}
		
	}*/
	if(edad>12 && edad<18)
	{
	
		alert("usted es adolecente");
	}
	else
	{
		alert("usted no es adolecente")
	}

}//FIN DE LA FUNCIÓN