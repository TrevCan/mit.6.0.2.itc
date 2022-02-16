
function sendFormR(){

	marcaEmpty=document.forminput.marca.value.length == 0 ? true: false;
	// anoEmpty=document.forminput.marca.ano.length == 0 ? true: false;
	modeloEmpty=document.forminput.modelo.value.length == 0 ? true: false;

	anoEmpty=document.forminput.ano.value.toString().length == 0 ? true: false;


//	alert("Hello, world!" + mensajeEmpty);
	//
	
	if(marcaEmpty){
		alert("Error: La marca es obligatoria.");
	}

	if(modeloEmpty){
		alert("Error: El modelo es obligatorio.");
	}
	if(anoEmpty){
		alert("Error: El año es obligatorio y debe ser un numero.");
	}

}
