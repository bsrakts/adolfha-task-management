import { createSlice, nanoid } from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: []
  },
  reducers: {
    getLocalData:(state) => {
      const getLocalStorage = localStorage.getItem("taskStorage")
      if (getLocalStorage) {
        state.todo = JSON.parse(getLocalStorage)
      }
    },
    addTask: {
      reducer: (state, action) => {
        state.todo.push({ ...action.payload })
        localStorage.setItem("taskStorage", JSON.stringify(state.todo))
      },
      prepare: (tasks) => {
        return {
          payload: {
            id: nanoid(),
            todo: tasks.todo,
            status: tasks.status
          }
        }
      }
    },
    removeTask: (state, action) => {
      state.todo = state.todo.filter((removeId) =>
        removeId.id !== action.payload
      )
      localStorage.setItem("taskStorage", JSON.stringify(state.todo))
    },
    editTask: (state, action) => {
      const { id, todo, status } = action.payload;
      console.log(action.payload, "jshfkj")
      const editTask = state.todo.find((editId) =>
        editId.id === id
      )
      if (editTask) {
        editTask.todo = todo,
          editTask.status = status
      }
    localStorage.setItem("taskStorage", JSON.stringify(state.todo))
    },
    removeAllTask: (state) => {
      state.todo = []
      localStorage.removeItem("taskStorage")
    },
  }
})

export const { getLocalData, addTask, removeTask, editTask, removeAllTask } = todoSlice.actions;

export const todoStatus = (state) => state.todo.todo.filter((todos) => todos.status === "todo");

export const progressStatus = (state) => state.todo.todo.filter((todos) => todos.status === "progress");

export const doneStatus = (state) => state.todo.todo.filter((todos) => todos.status === "done");

export const notTodoStatus = (state) => state.todo.todo.filter((todos) => todos.status === "not-todo");

export const todoList = (state) => state.todo.todo; // birinci todo name todo, ikinci todo state todo(array)


export default todoSlice.reducer;