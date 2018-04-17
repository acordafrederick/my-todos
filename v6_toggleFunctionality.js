//  TodoList object
var todoList = {
	todos: [],

    //	It should have a displayTodos method
	displayTodos: function() {
		if (this.todos.length === 0) {
			//	.displayTodos should tell if .todos is empty
			console.log("Your todo list is empty!");
		}
		else {
			//	.displayTodos should show .todoText
			console.log("My Todos:");
			for (var i = 0; i < this.todos.length; i++) {
				//	.displayTodos should show .completed
				if (this.todos[i].completed === true) {
					console.log("(x)", this.todos[i].todoText);
				}
				else {
					console.log("( )", this.todos[i].todoText);
				}
			}
		}
	},

    //	todoList.addTodo should add objects
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},

    //	todoList.changeTodo should change the todoText property
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},

    //	It should have a deleteTodo method
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},

	//	todoList.toggleCompleted should toggle the completed property
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	},

	toggleAll: function() {
		//	create variables to compare
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		//	get number of completed todos
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}
		//	If everything's true, make everything false
		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		}
		//	Otherwise, make it all true
		else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
	}

}

//  Handlers object containing methods for events
var handlers = {

    displayTodos: function() {
        todoList.displayTodos();
    },

    toggleAll: function() {
        todoList.toggleAll();
    },

    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
    },

    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    }
}