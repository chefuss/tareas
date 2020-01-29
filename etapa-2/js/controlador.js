// separación de responsabilidades.

function Controlador(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;

    this.vista.mostrarTareas(this.modelo.tareas)
}

var app = new Controlador(new Modelo, new Vista);