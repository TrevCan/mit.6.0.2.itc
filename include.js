
function sendForm(){

	nameEmpty=document.forminput.nombre.value.length == 0 ? true: false;

	telEmpty=document.forminput.telefono.value.toString().length == 0 ? true: false;

	mensajeEmpty=document.forminput.mensaje.value.length == 0 ? true: false;

//	alert("Hello, world!" + mensajeEmpty);
	//
	
	if(nameEmpty){
		alert("El nombre es obligatorio.");
	}

	if(telEmpty){
		alert("El telefono debe ser solo numeros y es obligatorio.");
	}
	if(mensajeEmpty){
		alert("El mensaje es obligatorio.");
	}

}
