import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "../feature/todoSlice"

export const store = configureStore({
  reducer: {
    todo:todoSlice
  }
})