<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EnviarCorreo extends Mailable
{
    use Queueable, SerializesModels;

    public $correo;
    public $nombre;
    public $mensaje;

    public function __construct($nombre, $mensaje, $correo)
    {
        $this->correo = $correo;
        $this->nombre = $nombre;
        $this->mensaje = $mensaje;
    }

    public function build()
    {
        return $this->view('emails.andejecruher');
    }
}
