import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './App.css'
import { useEffect } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [editIdx, setEditIdx] = useState(null)

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    if (todo.trim() === "") return;

    if (editIdx === null) {
      setTodos([...todos, todo])
    } else {
      setTodos(todos.map((item, index) => (index === editIdx) ? todo : item));
      setEditIdx(null);
    }
    setTodo("")
  }

  const delTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  const editTodo = (item, index) => {
    setTodo(item)
    setEditIdx(index)
  }


  return (
    <>
      <div className='flex items-center justify-center min-h-screen' >
        <div className='bg-blue-200 min-h-[60vh] w-[50vw]  p-5 m-3 rounded-xl flex flex-col'>
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
                      <div className='flex gap-x-2'>
                        <button className='rounded bg-white p-1'
                          onClick={() => editTodo(item, index)}
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />

                        </button>
                        <button className='rounded bg-white p-1'
                          onClick={() => delTodo(index)}
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>

                      </div>
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
