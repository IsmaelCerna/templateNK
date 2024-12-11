'use stric'

function cargando(msj) {
	Swal.fire({
		text:msj,
		imageUrl: '../../../../lib/assets/img/load.gif',
		imageWidth: 32,
  		imageHeight: 32,
		showConfirmButton:false,
		showCancelButton:false,
		showCloseButton:false,
		allowOutsideClick: false,
		allowEscapeKey: false
	});
}

function sweetalerta(titulo,msj,tipo){
    Swal.fire(titulo,msj,tipo);
}

function sweetMensaje(tipo,mensaje){
    Swal.fire({
		position: "center",
		icon: tipo,
		title: mensaje,
		showConfirmButton: false,
		timer: 1500
	});
}