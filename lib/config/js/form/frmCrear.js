$(document).ready(function(){
    $("#crear").click(function(e){
        e.preventDefault(); 
        crearUsuario();
    });

    $("#frmCrear").submit(function(e){
        e.preventDefault(); 
        crearUsuario();
    });
});

function crearUsuario(){
    if ($("#inputEmail").val() == "") {
        sweetMensaje("warning", "Debe ingresar el email");
    } else if ($("#inputPassword").val() == "") {
        sweetMensaje("warning", "Debe ingresar la clave");
    } else if ($("#inputUsername").val() == "") {
        sweetMensaje("warning", "Debe ingresar el nombre de usuario");
    } else {
        let url = "/template/lib/config/crear_usuario.php";
        $.ajax({
            type: "POST",
            url: url,
            data: $("#frmCrear").serialize(),
            success: function(data) {
                console.log("Respuesta del servidor:", data);  // Añade esta línea
                
                if (data == 1) {
                    sweetMensaje("success", "Usuario creado con éxito");
                } else {
                    sweetMensaje("error", "Hubo un problema: " + data);
                }
            },
            error: function(xhr, status, error) {
                console.error("Error en la solicitud AJAX:", status, error);
            }
        });
    }
    }