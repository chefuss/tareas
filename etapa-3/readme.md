# MVC

El patrón MVC nos propone separar el código de acuerdo a sus responsabilidades.

Está compuesto por tres elementos:

1. El modelo: que trabaja con los datos. No conoce cómo se ve la aplicación.
2. El controlador: es el nexo entre los otros dos elementos. Es el que toma las decisiones.
3. La vista: presenta la información al usuario, y éste interactúa con la vista.

## Etapa 3.

Vamos a escuchar el evento submit del botón y añadir una nueva tarea a nuestro array de tareas.
El modelo ya tiene un método para añadir una tarea.
El controlador es el que se encarga de avisarle al modelo del cambio, y recibirá la información de la vista.
La vista es donde vive el DOM y las interacciones con el HTML.

Dónde deberiamos colocar el addEventListener? en la vista? en el modelo? o en el controlador?

1. En el controlador: recibe el evento de la vista, y lo envía al modelo para efectivamente agregue la tarea.
    - creamos un método: manejarAgregarTarea, esta función debe recibir como parámetro el textoTarea (que viene el input) y llamar a la función agregarTarea del modelo pasándole el textoTarea como parámetro.
2. En la vista: escuchamos el "submit" del usuario.
    - Este método debe recibir como parámetro la función manejador que creamos en el controlador.
    - Debemos tener cuidado con this. Cuando escuchemos el evento this se va a pasar de la Vista a el formulario. Podemos usar una variable para guardar el valor de this antes del formulario.
    - Prevenimos el comportamiento por defecto del evento submit.
    - Si existe el event.target[0].value (el contenido de nuestro input) llamamos al manejador y le pasamos por parámetro el valor del input.
    - Cuando terminemos limpiamos el valor del input.
3. Volvemos al controlador: debemos crear un método para que automáticamente cuando se cambie algo en la vista, el controlador sepa y le avice al modelo.
    - la función podría llamar onCambioListaTareas, recibe las tareas por parámetro y ejecuta el método de la vista mostrarTareas(tareas)
4. Ahora en el modelo: vamos a crear un método que una todo.
    - creamos el método unirOnCambioDeLista y le pasamos callback como parámetro, y el cuerpo será this.onCambioListaTareas = callback;
    - además vamos a agregar en el método agregarTarea una llamada a this.onCambioListaTareas(this.tareas);