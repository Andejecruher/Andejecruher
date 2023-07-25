<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\EnviarCorreo;

class AndejecruherController extends Controller
{
    public function enviarCorreo(Request $request)
    {
        // Valida los datos enviados desde el formulario
        $request->validate([
            'nombre' => 'required|string',
            'correo' => 'required|email',
            'mensaje' => 'required|string',
        ]);

        $nombre = $request->input('nombre');
        $correo = $request->input('correo');
        $mensaje = $request->input('mensaje');

        // Envía el correo electrónico
        Mail::to($correo)->send(new EnviarCorreo($nombre, $mensaje, $correo));

        return "¡Correo enviado correctamente!";
    }
}
