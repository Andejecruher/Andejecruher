<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" href="{{ asset('favicon.ico') }}" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Andejecruher</title>
  <link rel="stylesheet" type="text/css" href="{{ asset('loader.css') }}" />
  @vite(['resources/js/main.js'])
</head>

<body>
  <div id="app">
    <!-- PAGE LOADER : PLACE RIGHT AFTER BODY TAG -->
    <div class="page-loader">
      <div class="spinner"></div>
      <div class="txt">Andejecruher</div>
      <div class="txt">
        < />
      </div>
    </div>
  </div>
  </div>

  <script>
    const loaderColor = localStorage.getItem('sneat-initial-loader-bg') || '#FFFFFF'
    const primaryColor = localStorage.getItem('sneat-initial-loader-color') || '#696CFF'

    if (loaderColor)
      document.documentElement.style.setProperty('--initial-loader-bg', loaderColor)

    if (primaryColor)
      document.documentElement.style.setProperty('--initial-loader-color', primaryColor)
  </script>
</body>

</html>
