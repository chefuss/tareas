// separación de responsabilidades.

function Controlador(modelo, vista) {
    var that = this;
    this.modelo = modelo;
    this.vista = vista;

    // this.vista.mostrarTareas(this.modelo.tareas);
    
    this.onCambioListaTareas = function(tareas) {
        that.vista.mostrarTareas(tareas);
    }
    this.manejarAgregarTarea = function(textoTarea) {
        that.modelo.agregarTarea(textoTarea);
    }
    this.modelo.unirOnCambioDeTareas(this.onCambioListaTareas);
    this.vista.escucharAgregarTareas(this.manejarAgregarTarea);
    this.onCambioListaTareas(this.modelo.tareas);
}

var app = new Controlador(new Modelo, new Vista);