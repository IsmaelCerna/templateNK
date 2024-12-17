$(document).ready(function() {
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
                var row = $("<tr>").attr("data-id", user.id);
                row.append($("<td>").text(user.username));
                row.append($("<td>").html(
                    '<span class="user-email">' + user.email + '</span>' +
                    '<input type="text" class="form-control form-control-sm edit-email d-none" value="' + user.email +'" >'
                ));
                row.append($("<td>").html(
                    '<button class="btn btn-warning btn-sm edit-btn">Editar</button>' +
                    '<button class="btn btn-success btn-sm save-btn d-none">Guardar</button>' +
                    '<button class="btn btn-danger btn-sm" onclick="eliminarUsuario(' + user.id + ')">Eliminar</button>'
                ));
                tableBody.append(row);
            });

            $(".edit-btn").click(activarEdicion);
            $(".save-btn").click(guardarEdicion);
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

function activarEdicion() {
    var row = $(this).closest("tr");
    row.find(".user-email").addClass("d-none");
    row.find(".edit-email").removeClass("d-none");
    row.find(".edit-btn").addClass("d-none");
    row.find(".save-btn").removeClass("d-none"); 
}

function guardarEdicion() {
    var row = $(this).closest("tr");
    var userId = row.data("id");
    var nuevoEmail = row.find(".edit-email").val();

    $.ajax({
        type: "POST",
        url: "/template/lib/config/editar_usuarios.php",
        data: { id: userId, email: nuevoEmail },
        success: function(response) {
            if (response == 1) {
                sweetMensaje("success", "Email actualizado con éxito");
                row.find(".user-email").text(nuevoEmail).removeClass("d-none");
                row.find(".edit-email").addClass("d-none");
                row.find(".edit-btn").removeClass("d-none");
                row.find(".save-btn").addClass("d-none");
            } else {
                sweetMensaje("error", "No se pudo actualizar el email: " + response);
            }
        },
        error: function(xhr, status, error) {
            sweetMensaje("error", "Hubo un problema al actualizar el email: " + error);
        }
    });
}
