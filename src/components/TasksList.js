import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

import { Link } from "react-router-dom";

function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <header>
        <h1>Total de tareas: {tasks.length}</h1>
        <Link className="list-buttom" to="/create-task">
          Create Task
        </Link>
      </header>

      <container className="cards">
        {tasks.map((task) => (
          <div className="card" key={task.id}>
            <h3>{task.title}</h3>
            <p className="description">{task.description}</p>
            <div>
              <button
                className="list-buttom"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
              <Link to={`/edit-task/${task.id}`}>
                <button className="list-buttom">Edit</button>
              </Link>
            </div>
          </div>
        ))}
      </container>
    </div>
  );
}

export default TasksList;
