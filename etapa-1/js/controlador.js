// separación de responsabilidades.

function Controlador(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
}

var app = new Controlador(new Modelo, new Vista);