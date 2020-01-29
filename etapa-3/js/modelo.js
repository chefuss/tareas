function Modelo() {
    this.tareas = [
        {id: 1, texto: 'Aprender MVC', completo: false},
        {id: 2, texto: 'Terminar práctico', completo: false}
    ];

    this.unirOnCambioDeTareas = function(callback) {
        this.onCambioListaTareas = callback;
    }
    this.agregarTarea = function(textoTarea) {
        var tarea = {
            id: this.tareas.length > 0 ? this.tareas[this.tareas.length - 1].id + 1 : 1,
            texto: textoTarea,
            completo: false
        }
        this.tareas.push(tarea);
        this.onCambioListaTareas(this.tareas);
    }
}