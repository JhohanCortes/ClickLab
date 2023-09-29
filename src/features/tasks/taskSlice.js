import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  id: 1,
  title: "Holi",
  description: "descripcióndescripcióndescripcióndescripcióndescripcióndescripcióndescripcióndescripcióndescripcióndescripcióndescripcióndescripcióndescripcióndescripcióndescripcióndescripcióndescripcióndescripcióndescripcióndescripcióndescripción"
},{
  id: 1,
  title: "Holi",
  description: "descripción"
},{
  id: 1,
  title: "Holi",
  description: "descripción"
},{
  id: 1,
  title: "Holi",
  description: "descripción"
},{
  id: 1,
  title: "Holi",
  description: "descripción"
},{
  id: 1,
  title: "Holi",
  description: "descripción"
},{
  id: 1,
  title: "Holi",
  description: "descripción"
},{
  id: 1,
  title: "Holi",
  description: "descripción"
},{
  id: 1,
  title: "Holi",
  description: "descripción"
},{
  id: 1,
  title: "Holi",
  description: "descripción"
},{
  id: 1,
  title: "Holi",
  description: "descripción"
},];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload];
    },
    deleteTask: (state, action) => {
      return state.filter((task) => action.payload !== task.id);
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }
    },
  },
});

export const { editTask, deleteTask, addTask } = taskSlice.actions;
export default taskSlice;
