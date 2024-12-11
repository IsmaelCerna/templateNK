$(document).ready(function(){
    $("#entrar").click(function(){
        entrar();
    });

    $("#frmLogin").keypress(function(e){
        if(e.which==13){
            entrar();
        }
    });
});

function entrar(){
    if ($("#username").val()==""){
        sweetMensaje("warning","Debe ingresar el usuario");
    } else if ($("#password").val()==""){
        sweetMensaje("warning","Debe ingresar la clave");
    } else {
        let url = "lib/config/validar";
        $.ajax({
            type: "POST",
            url: url,
            data: $("#frmLogin").serialize(),
            success: function(data){
                if(data==1){
                    location.href="modulos/modRRHH/vistas/main/app";
                } else if (data==2){
                    sweetMensaje("error","Los datos ingresados no son válidos");
                } else {
                    sweetMensaje("error","Hubo un problema " + data);
                }
            }
        });
    }
}