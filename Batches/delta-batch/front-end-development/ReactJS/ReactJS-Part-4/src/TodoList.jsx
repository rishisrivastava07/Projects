import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addTask = () => {
        // to change in the array of objects -> destructure the array and pass newTodo object to array
        // setTodos([...todos, { task: newTodo, id: uuidv4() }]);
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    // to delete any element from an array we use filter() method
    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    };

    // update for all element in array
    let upperCaseAll = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                }
            })
        ));
    }

    // update for one element in array
    let upperCaseOne = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase()
                    }
                } else {
                    return todo;
                }
            })
        ));
    }

    // Changing Todo - implement "done task" feature to the todo
    let markAsDoneAll = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if (todo.isDone == false) {
                    return {
                        ...todo,
                        isDone: true,
                    }
                } else {
                    return todo;
                }
            })
        ));
    }

    let markAsDoneOne = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if ((todo.isDone == false) && (todo.id == id)) {
                    return {
                        ...todo,
                        isDone: true,
                    }
                } else {
                    return todo;
                }
            })
        ));
    }
    return (
        <div>
            <input placeholder="Add a task" value={newTodo} onChange={updateTodoValue} />
            <br />
            <br />
            <button onClick={addTask}>Add Task</button>
            <br />
            <br />

            <hr />
            <h4>Task to Do</h4>
            <ul>
                {/* To render from array in form of list we use map() method */}
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>{todo.task}</span>
                            &nbsp; &nbsp;
                            {/* () => deleteTodo(todo.id) - it will simply create a copy of deleteTodo and not execute this function here */}
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            &nbsp; &nbsp;
                            <button onClick={() => upperCaseOne(todo.id)}>UpperCase</button>
                            &nbsp; &nbsp;
                            <button onClick={() => markAsDoneOne(todo.id)}>Mark as Done</button>
                        </li>
                    )
                })}
            </ul>

            <button onClick={upperCaseAll}>UpperCase All</button>
            <button onClick={markAsDoneAll}>Mark As Done All</button>
        </div>
    )
}