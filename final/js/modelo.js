function Model() {
    //json.
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];

    this._commit = function(todos) {
        this.onTodoListChanged(todos);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    
    this.bindTodoListChanged = function(callback) {
        this.onTodoListChanged = callback;
    }

    this.addTodo = function(todoText) {
        var todo = {
          id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
          text: todoText,
          complete: false
        };
        this.todos.push(todo);
        this._commit(this.todos);
      }

    this.editTodo = function(id, updatedText) {
        this.todos = this.todos.map(function (todo) {
            return todo.id === id ? {
            id: todo.id,
            text: updatedText,
            complete: todo.complete
            } : todo;
        });
        this._commit(this.todos);
    }
    this.deleteTodo = function(id) {
        this.todos = this.todos.filter(function (todo) {
          return todo.id !== id;
        });
        this._commit(this.todos);
    }

    this.toggleTodo = function(id) {
        this.todos = this.todos.map(function (todo) {
          return todo.id === id ? {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete
          } : todo;
        });
        this._commit(this.todos);
    }
}