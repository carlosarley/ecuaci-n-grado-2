function operar() {

	alert("hola");

	var a = document.getElementsById('ta').value;
	var b = document.getElementsById('tb').value;
	var c = document.getElementsById('tc').value;
    var d = 0;
	var x1 = 0;
	var x2 = 0;



	a = parseInt(a);
	b = parseInt(b);
	c = parseInt(c);



	d = ((b*b)-(4*(a*c)));


	if(d > 0)
	{
		alert("No tiene solucion");

	}
	else
	{

	x1 = (-b)+Math.sqrt(Math.pow((b),2)-(4(a)(c)))/ (2(a));
	alert("El resultado es: " + x1);

	x2 = (-b)-Math.sqrt(Math.pow((b),2)-(4(a)(c))) / (2(a));
	alert("El resultado es: " + x2);
    return false;
    }
    
}