var TodoList = (function () {
    function TodoList(todo, status) {
        this.todo = todo;
        this.status = status;
    }
    TodoList.prototype.add = function (list) {
        this.todo.push(list.todo);
        this.status.push(list.status);
    };
    TodoList.prototype.delete = function (todo) {
        this.status[todo] = "deleted";
    };
    TodoList.prototype.markComplete = function (todo) {
        this.status[todo] = "completed";
    };
    TodoList.prototype.edit = function (id, name) {
        this.todo[id] = name;
    };
    return TodoList;
})();
var list = new TodoList([], []);

function add(todo, status) {
    list.add({
        todo: todo,
        status: status
    });
}
function deletetask(name) {
    list.delete(name);
}
function completetask(name) {
    list.markComplete(name);
}
function editval(id, name) {
    list.edit(id, name);
}
