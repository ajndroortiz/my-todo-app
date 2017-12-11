class ToDo {
  constructor() {
    this.newToDo = document.querySelector('.newToDo');
    this.newToDoSubmit = document.querySelector('.submit');
    this.todoMenu = document.querySelector('.todo-list__menu');
    this.events();
  }
  events() {
    this.newToDoSubmit.addEventListener('click', this.addToDo.bind(this));
    this.todoMenu.addEventListener('click', this.deleteItem.bind(this));
  }
  addToDo() {
    let todoValue = this.newToDo.value;
    let newToDoItem = document.createElement('li');
    let todoContent = `<input type="checkbox" class="completed">${todoValue}<button class="delete"> <i class="fa fa-trash-o"></i></button>`;
    newToDoItem.classList.add('todo-list__item');
    newToDoItem.innerHTML = todoContent;
    this.todoMenu.append(newToDoItem);
    this.newToDo.value = '';
  }
  deleteItem(e) {
    let button = e.target;
    button.parentNode.parentNode.removeChild(button.parentNode);
  }
}
export default ToDo;
