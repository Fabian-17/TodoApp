import { useState } from "react"

export const Todoadd = () => {

    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState("")

// Lógica para almacenar los todos
    const inputChange = ({target}) => {
        setTodo(target.value)
      }
    
          // Lógica para añadir un todo
      const handleOnkeyDown = ({ key }) => {
        if (key === "Enter") {
          setTodoList([
            ...todoList,
            {
              id: new Date().getTime(),
              desc: todo,
              done: false,
            },
          ]);
          setTodo(""); 
        }
      };

      const completeTodo = (id) => {
        const todos = todoList.map((todoItem) => {
          if (todoItem.id === id) {
            return {
              ...todoItem,
              done: !todoItem.done,
            };
          }
          return todoItem;
        });
        setTodoList(todos);
      };
    

    return (
        <>
        <div className="row mb-3">
        <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0 ">
          <h3>New Todo</h3>
          <input
            type="text"
            className="form-control"
            placeholder="Add Todo"
            name="todo"
            // Evento cuando cambia el valor del input
            onChange={inputChange}
            value={todo}
            // Evento cuando presiona tecla Enter en ASCII
            onKeyUp={handleOnkeyDown}
          />
        </div>
        </div>

<div className="col-sm-12 col-md-8">
<h3>Todo List</h3>
<ul className="list-unstyled">
  {/* TodoList Item */
    (todoList.length === 0)
    ?
    (
     <li className="alert alert-info">No hay tareas</li> 
    )
    :
    (
      todoList.map((todo) => (
        <li
          key={todo.id}
          className={`d-flex justify-content-between mb-2 alert ${
            todo.done ? "alert-success" : "alert-warning"
          }`}>
          <span>{todo.desc}</span>
          <button
        className={`btn btn-sm ${todo.done ? "btn-success" : "btn-danger"}`}onClick={() => completeTodo(todo.id)}>
        {todo.done ? "Completado" : "Pendiente"}
      </button>
        </li>
      ))
    )
    }
</ul>
</div>
</>
    )
}