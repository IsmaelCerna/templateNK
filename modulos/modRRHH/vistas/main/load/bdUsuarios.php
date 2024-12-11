<div class="pagetitle">
  <h1>Lista de Usuarios</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">Inicio</li>
      <li class="breadcrumb-item">Usuarios</li>
      <li class="breadcrumb-item">Lista de Usuarios</li>
    </ol>
  </nav>
</div>

<section class="section">
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Usuarios Registrados</h5>
                    <a href="/template/modulos/modRRHH/vistas/main/load/bqUsuarios.php" class="btn btn-primary mb-3" id="agregarUsuario">
                     <i class="bi bi-plus"></i> Agregar Nuevo Usuario
                    </a>
                    
                    <table class="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Usuario</th>
                                <th>Correo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="userTableBody">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>

<script src="/template/lib/config/js/usuarios.js"></script>

