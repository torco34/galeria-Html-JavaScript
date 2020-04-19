var num=1;

function  adelante() {
	num++;
	if(num>4)
		num=1;
		var foto=document.getElementById("foto");
		foto.src="foto"+num+".jpg";
	}




function  atras() {

	num--;
	if(num<1)
		num=4;
		var foto=document.getElementById("foto");
		foto.src="foto"+num+".jpg";
	}  




	var num=2;

	function image1() {
		num++;
		if(num>5)
			num=1;
		var fotos=document.getElementById("fotos");
		fotos.src="fotos"+num+".jpg";
	}

	function image2() {
		num--;
		if(num<1)
			num=5;
		var fotos=document.getElementById("fotos");
		fotos.src="fotos"+num+".jpg";
	}