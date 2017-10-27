interface ToDo{
    todo:string
    status:string

}
class  TodoList
{

    public todo:string[]
    public status:string[]

    constructor(todo : string [], status : string[]) {
        this.todo = todo;
        this.status = status;

    }
    add(list : ToDo) {
        this.todo.push(list.todo);
        this.status.push(list.status);

    }
    delete(todo:number)
    {
                this.status[todo]="deleted"

    }
    markComplete(todo:number)
    {
                this.status[todo]="completed"
    }
    edit(id:number,name:string)
{
    this.todo[id]=name;
}

}
var list = new TodoList([],[] );


function add(todo : string, status : string) {
    list.add({
        todo : todo,
        status : status
    });
}
function deletetask(name:number)
{
    list.delete(name);
}
function completetask(name:number)
{
    list.markComplete(name);
}
function editval(id:number,name:string)
{
    list.edit(id,name);
}
