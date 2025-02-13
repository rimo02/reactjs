// start yaha se hota hai kisi bhi application me
// ek application ka most case pe ek hi store hota hai (but exceptions hai)
// also called single source of truth
import { configureStore } from '@reduxjs/toolkit'; // isse store configure ho jaata hai (iske andar  object hai)
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})

// store ke andar jabbi value update hogi, wo har tarah se value update nahi leta hai, ye data flow e nahi hai, data flow ke liye isko awareness chaiye, iske liye isko awareness chaiye, batana hai isko saare reducers kaha hai , feature->todo->todoSlice ke andar reducers hai. slice is just a naming convention
