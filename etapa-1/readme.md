# MVC

El patrón MVC nos propone separar el código de acuerdo a sus responsabilidades.

Está compuesto por tres elementos:

1. El modelo: que trabaja con los datos. No conoce cómo se ve la aplicación.
2. El controlador: es el nexo entre los otros dos elementos. Es el que toma las decisiones.
3. La vista: presenta la información al usuario, y éste interactúa con la vista.

## Etapa 1.

1. Forkeamos y descargamos el código.
2. Creamos nuestra applicación MVC. Debemos crear un modelo, controlador y vista.
3. El modelo deberá:
    - Ser una función constructora.
    - Tener como propiedades: un array de objetos con el siguiente formato: 
    {id: 1, texto: 'Aprender MVC', completo: false}
4. La vista deberá:
    - Ser una función constructora.
    - Tener como propiedades: 
        - this.app: debe seleccionar el elemento del DOM de id root.
        - this.form: debe crear un elemento html form
        - this.input: debe crear un elemento html input
        - this.input.type: 'text';
        - this.input.placeholder: 'Agregar Tarea';
        - this.input.name: 'tarea';
        - this.botonEnviar: debe crear un elemento button.
        - this.botonEnviar.textContent: debe ser igual a "agregar"
        - debemos appendiar al formulario el input y el botonEnviar
        - this.listaTareas: debe crear un elemento html tipo ul, con clase 'lista-tareas';
        - se debe appendiar el formulario y la listaTareas a this.app.
5. El controlador deberá:
    - Ser una función constructora. Y debe recibir como parámetro el modelo y la vista.
    - Tener como propiedades:
        - this.modelo = al modelo;
        - this.vista = a la vista;
    - Al final del archivo del controlador.js se debe utilizar la siguiente función:
    var app = new Controlador(new Modelo, new Vista);