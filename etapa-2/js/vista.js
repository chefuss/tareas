function Vista() {
    this.app = document.getElementById('root');
    this.form = document.createElement('form');
    this.input = document.createElement('input');
    this.input.type = 'text';
    this.input.placeholder = 'Agregar Tarea';
    this.input.name = 'tarea';
    this.botonEnviar = document.createElement('button');
    this.botonEnviar.textContent = 'Agregar';

    this.form.append(this.input, this.botonEnviar);

    this.listaTareas = document.createElement('ul');
    this.listaTareas.classList.add('lista-tareas');

    this.app.append(this.form, this.listaTareas);

    this.mostrarTareas = function(tareas) {
        //qué hacemos si no hay ningún elemento en la lista?
        //mostremos un mensaje.
        var that = this;
        if (tareas.length === 0) {
            var parrafo = document.createElement('p');
            parrafo.textContent = 'Nada para mostrar, no hay tareas creadas.';
            this.listaTareas.append(p);
        } else {
            // tareas.forEach(function(tarea) {
            //     var listItem = document.createElement('li');
            //     listItem.id = tarea.id;
            //     listItem.textContent = tarea.texto;

            //     that.listaTareas.append(listItem);
            // })

            for (var i = 0; i < tareas.length; i++) {
                var listItem = document.createElement('li');
                listItem.id = tareas[i].id;
                listItem.textContent = tareas[i].texto;

                this.listaTareas.append(listItem);
            }
        }
        console.log(tareas)
    }
}