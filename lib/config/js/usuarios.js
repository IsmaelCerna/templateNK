$(document).ready(function(){
    cargarUsuarios();
});

function cargarUsuarios() {
    $.ajax({
        type: "GET",
        url: "/template/lib/config/fetch_usuarios.php",
        dataType: "json",
        success: function(data) {
            var tableBody = $("#userTableBody");
            tableBody.empty();
            
            $.each(data, function(index, user) {
                var row = $("<tr>");
                row.append($("<td>").text(user.username));
                row.append($("<td>").text(user.email));
                row.append($("<td>").html(
                    '<button class="btn btn-danger btn-sm" onclick="eliminarUsuario(' + user.id + ')">Eliminar</button>'
                ));
                tableBody.append(row);
            });
        },
        error: function(xhr, status, error) {
            sweetMensaje("error", "Hubo un problema al cargar los usuarios: " + error);
        }
    });
}

function eliminarUsuario(userId) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
        $.ajax({
            type: "POST",
            url: "/template/lib/config/eliminar_usuarios.php",
            data: { id: userId },
            success: function(response) {
                if (response == 1) {
                    sweetMensaje("success", "Usuario eliminado con éxito");
                    cargarUsuarios();
                } else {
                    sweetMensaje("error", "Hubo un problema al eliminar el usuario: " + response);
                }
            },
            error: function(xhr, status, error) {
                sweetMensaje("error", "Hubo un problema al eliminar el usuario: " + error);
            }
        });
    }
}