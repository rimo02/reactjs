import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos((prev) => [...prev, todo])
    setTodo("")
  }

  const delTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }
  return (
    <>
      <div className='flex items-center justify-center min-h-screen' >
        <div className='bg-gradient-to-b from-blue-400 min-h-[60vh] w-[50vw]  p-5 m-3 rounded-xl flex flex-col'>
          <h1 className='text-black mb-3 font-bold' >Yours Todo App</h1>
          <input type="text" placeholder='add item'
            className='bg-white w-full rounded p-2 text-black outline-none'
            value={todo}
            onChange={handleChange}
          />
          <button
            className='bg-blue-700 w-20 rounded my-3 p-1'
            onClick={addTodo}
          > Add</button>
          <h2 className='text-black mb-3 text-sg' >Yours todo</h2>
          <div className='text-black'>
            {
              todos.length === 0 ? (
                <div>Nothing to show here</div>
              ) : (
                <ol className="text-black gap-4">
                  {todos.map((item, index) => (
                    <li key={index} className="bg-gradient-to-r from-pink-100 p-1 my-2 rounded justify-between items-center flex">
                      <span className='w-full'>{item}</span>
                      <button className='rounded bg-white p-1'
                        onClick={() => delTodo(index)}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ol>
              )
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default App
