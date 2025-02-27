

const todoList = [{
  name :'make dinner', 
  dueDate: '2022-12-22'} , {
  name: 'wash dshes',
  dueDate: '2022-12-22'}];

renderToDoList();

function renderToDoList(){


      let todoListHTML = '';

      for(let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name =todoObject.name;
        const dueDate = todoObject.dueDate;
        const html =  
        `<p>
        ${name} ${dueDate}
        <button onClick="
          todoList.splice(${i},1);
          renderToDoList();
        ">Delete</button> 
        </p>
        `;
        todoListHTML += html;
      }


      document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


function addTodo(){
  
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateinputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateinputElement.value;

  todoList.push({
    name: name, 
    dueDate: dueDate 
  });



  inputElement.value='';
  dateinputElement.value='';

  renderToDoList();
}