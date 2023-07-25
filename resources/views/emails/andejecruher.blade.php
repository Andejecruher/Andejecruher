<!DOCTYPE html>
<html>

<head>
    <title>Correo de prueba</title>
    <!-- Agregar los enlaces a los estilos de Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h1 class="text-center">Hola, {{ $nombre }}</h1>
                    </div>
                    <div class="card-body">
                        <p>Has recibido un mensaje:</p>
                        <p>{{ $mensaje }}</p>
                        <p>Gracias por utilizar nuestro servicio.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
