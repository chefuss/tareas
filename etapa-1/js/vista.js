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
}