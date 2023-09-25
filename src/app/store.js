// En el archivo './app/store.js'

import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "../features/tasks/taskSlice";

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer
  }
});

export default store; // Exporta 'store' como valor predeterminado
