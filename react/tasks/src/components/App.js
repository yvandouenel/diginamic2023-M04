import { useEffect, useState, useRef } from "react";
import Task from "./Task";
import JsonServer from "../services/JsonServer";
import FormAddTask from "./FormAddTask";


function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const inputTitleRef = useRef(null);

  // UseEffect avec un tableau de dépendances vide sera exécuté une seule fois après le premier render
  useEffect(() => {
    loadRemoteTasks();
    try {
      loadRemoteTasks()
    } catch (error) {
      setError(`Erreur attrapée dans loadTasks` + error);
      console.error(`Erreur attrapée dans loadTasks` + error);
    }
  }, []);

  function getMaxId() {
    return Math.max(
      ...tasks.map(task => task.id)
    );
  }
  function handleClickDone(task_id) {
    console.log(`Dans handleClickDone`, task_id);
    const copy_tasks = [...tasks];
    copy_tasks.forEach((task) => {
      if (task.id === task_id) {
        task.done = !task.done;
        JsonServer.patchRemoteTask(task_id, { done: task.done }); 
      }
    })
    setTasks(tasks => copy_tasks);
    
  }
  async function handleSubmitAddTask(event) {
    console.log(`Dans handleSubmitAddTask`);
    const form = event.target;
    const formData = new FormData(form);
    console.log(`formData`, formData);
    formData.forEach(title => {
      const new_task = {
        title: title,
        done: false
      }

      JsonServer.addRemoteTask(new_task);

      new_task.id = getMaxId() + 1;
      // Modification du state tasks
      const new_tasks = [...tasks, new_task];
      setTasks(new_tasks);
      inputTitleRef.current.value = "";
      inputTitleRef.current.focus();
    })

  }
  async function handleClickDelete(task_id) {
    console.log(`Dans handleClickDelete`, task_id);
    try {
      await JsonServer.deleteRemoteTask(task_id);
      const filtered_tasks = tasks.filter((task) => (task.id !== task_id));
      setTasks(tasks => filtered_tasks);
    } catch (error) {
      console.error(`Erreur attrapée handleClickDelete`);
      setError(`Erreur attrapée dans handleClickDelete` + error);
      loadRemoteTasks();
    }
  }
  async function loadRemoteTasks() {
    const tasks_loaded = await JsonServer.loadTasks();
    setTasks(tasks_loaded);

  }
  return (
    <div className="App container">
      <h1>Gestion des tâches</h1>
      <FormAddTask
        inputTitleRef={inputTitleRef}
        onSubmitAddTask={handleSubmitAddTask} />
      {error && (<h2 className="text-danger">{error}</h2>)}
      {/* Création des composants Task à partir du state tasks */}
      {tasks.map((task) =>
        <Task key={task.id}
          task={task}
          onClickDone={handleClickDone}
          onClickDelete={handleClickDelete}
        />).sort((a, b) => {
          console.log(`a.props.task :`, a.props.task);
          return a.props.task.done - b.props.task.done;
        })}
    </div>
  );
}

export default App;
