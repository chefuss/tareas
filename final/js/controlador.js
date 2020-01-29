function Controller(model, view) {
    var _this5 = this;

    this.model = model;
    this.view = view; // Explicit this binding

    this.onTodoListChanged = function(todos) {
        _this5.view.displayTodos(todos);
    }
    this.handleAddTodo = function(todoText) {
        _this5.model.addTodo(todoText);
    }
    this.handleEditTodo = function(id, todoText) {
        _this5.model.editTodo(id, todoText);
    }
    this.handleDeleteTodo = function(id) {
        _this5.model.deleteTodo(id);
    }
    this.handleToggleTodo = function(id) {
        _this5.model.toggleTodo(id);
    }

    this.model.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo); // Display initial todos
    this.onTodoListChanged(this.model.todos);

}

  var app = new Controller(new Model(), new View());