<div class="pagetitle">
  <h1>Agregar Usuarios</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">Inicio</a></li>
      <li class="breadcrumb-item">Usuarios</li>
      <li class="breadcrumb-item">Agregar Usuario</li>
    </ol>
  </nav>
</div><!-- End Page Title -->

<section class="section">
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Agregar Usuario</h5>
          <button class="btn btn-warning" id="regresar">
            <i class="bi bi-arrow-left"></i> Regresar
          </button>
        </div>
      </div>

    </div>    
  </div>
</section>

<script>
  $(document).ready(function(){
  
    $("#regresar").click(function(){
        regresar();
    })

  });

  function regresar() {
      cargando('Cargando Contenido...')
      $("#main").load("load/bqUsuarios", function() {
          swal.close();
      });
  }
</script>