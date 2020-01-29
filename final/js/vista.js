function View() {

    this.resetInput = function() {
        this.input.value = '';
    }

    this.getElement = function(selector) {
        var element = document.querySelector(selector);
        return element;
    }

    this.displayTodos = function(todos) {
        var _this = this;
    
        // Delete all nodes
        while (this.todoList.firstChild) {
          this.todoList.removeChild(this.todoList.firstChild);
        } // Show default message
    
    
        if (todos.length === 0) {
          var p = this.createElement('p');
          p.textContent = 'Nothing to do! Add a task?';
          this.todoList.append(p);
        } else {
          // Create nodes
          todos.forEach(function (todo) {
            var li = _this.createElement('li');
    
            li.id = todo.id;
    
            var checkbox = _this.createElement('input');
    
            checkbox.type = 'checkbox';
            checkbox.checked = todo.complete;
    
            var span = _this.createElement('span');
    
            span.contentEditable = true;
            span.classList.add('editable');
    
            if (todo.complete) {
              var strike = _this.createElement('s');
    
              strike.textContent = todo.text;
              span.append(strike);
            } else {
              span.textContent = todo.text;
            }
    
            var deleteButton = _this.createElement('button', 'delete');
    
            deleteButton.textContent = 'Delete';
            li.append(checkbox, span, deleteButton); // Append nodes
    
            _this.todoList.append(li);
          });
        } // Debugging
    
        console.log(todos);
    }

    this.createElement = function(tag, className) {
        var element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }

    this._initLocalListeners = function() {
        var _this2 = this;
    
        this.todoList.addEventListener('input', function (event) {
          if (event.target.className === 'editable') {
            _this2._temporaryTodoText = event.target.innerText;
          }
        });
    }

    this.bindAddTodo = function(handler) {
        var _this3 = this;
        this.form.addEventListener('submit', function (event) {
          event.preventDefault();

          if (event.target[0].value) {
            handler(event.target[0].value);
    
            _this3.resetInput();
          }
        });
    }

    this.bindDeleteTodo = function(handler) {
        this.todoList.addEventListener('click', function (event) {
          if (event.target.className === 'delete') {
            var id = parseInt(event.target.parentElement.id);
            handler(id);
          }
        });
    }

    this.bindEditTodo = function(handler) {
        var _this4 = this;
    
        this.todoList.addEventListener('focusout', function (event) {
          if (_this4._temporaryTodoText) {
            var id = parseInt(event.target.parentElement.id);
            handler(id, _this4._temporaryTodoText);
            _this4._temporaryTodoText = '';
          }
        });
    }
    
    this.bindToggleTodo = function(handler) {
        this.todoList.addEventListener('change', function (event) {
            if (event.target.type === 'checkbox') {
            var id = parseInt(event.target.parentElement.id);
            handler(id);
            }
        });
    }
    
    this.getTodoText = function() {
        return this.input.value;
    }

    this.app = this.getElement('#root');
    this.form = this.createElement('form');
    this.input = this.createElement('input');
    this.input.type = 'text';
    this.input.placeholder = 'Add todo';
    this.input.name = 'todo';
    this.submitButton = this.createElement('button');
    this.submitButton.textContent = 'Submit';
    this.form.append(this.input, this.submitButton);
    this.title = this.createElement('h1');
    this.title.textContent = 'Todos';
    this.todoList = this.createElement('ul', 'todo-list');
    this.app.append(this.title, this.form, this.todoList);
    this._temporaryTodoText = '';

    this._initLocalListeners();
}