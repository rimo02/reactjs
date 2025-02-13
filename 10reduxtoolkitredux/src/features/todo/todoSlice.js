import { createSlice, nanoid } from "@reduxjs/toolkit";

//store ka initial state ..store starting me kaisa hoga
const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}

//slice is bada version of reducer(functionality)

export const todoSlice = createSlice({
    // slice bannane kie liye slice ka name, initial state and pure reducers ki list
    name: 'todo',
    initialState,
    reducers: {
        // context api me  humlog function ka declration lagate the, yaha pe definition likhtehai
        addTodo: (state, action) => { // state - current state ( updated value in the store)
            const todo = {
                id: nanoid(),
                text: action.payload // payload ek object hai (payload ke andar text hai)
                // for instance context api me pure array ko spread karna padta hai yaha state preserve rehta hai
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    } // isme aati hai propery and function

}) //iske andar kya ayega ? slices ke naam

// step1 for exporting
export const { addTodo, removeTodo } = todoSlice.actions // ye components pe konsa reducer kaam ayenge isliye jitna bhi hai unko export krna hai

// store ko saare ke saare reducers ka list chaiye
export default todoSlice.reducer