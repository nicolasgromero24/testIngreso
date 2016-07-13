function Mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById('edad').value;
if(edad>=18)
		{
			alert("usted es mayor");
		}
		else
		{
			if(edad<=13)
			{
				alert("Usted es menor");
			}
			else
			{
				alert("Usted es adolecente");
			}
		}




}//FIN DE LA FUNCIÓN