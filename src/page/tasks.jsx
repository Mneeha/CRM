import { useState } from "react";
import useDataStore from "../zustand/useDataStore";

const Tasks = () => {
  const {tasks,setTasks} = useDataStore(); 
  const [newTask,setNewTask] = useState({
    title: "", client: "", dueDate: "",status: "Pending",note: "",
  });
  const addTask = () => {
    if(!newTask.title ||!newTask.client) return;
    setTasks([
      ...tasks,
      { ...newTask, id: Date.now() },
    ]);
    setNewTask({ title:"",client:"",dueDate:"",status:"Pending",note:""});
  };
  return (
    <div className="t_page">
      <div className="bg">
      <img src="/img9.png" alt="bg" className="bgimg" />
      </div>
      <h1 className="t_title">Tasks & Reminders</h1>
      <div className="t_form">
        <input
          type="text"
          placeholder="Title of the Task..."
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
        <input
          type="text"
          placeholder="Client or Lead Name..."
          value={newTask.client}
          onChange={(e) => setNewTask({ ...newTask, client: e.target.value })} />
        <input
          type="date"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })} />
        <select
          value={newTask.status}
          onChange={(e) => setNewTask({ ...newTask, status: e.target.value })} >
          <option>Pending</option>
          <option>Done</option>
        </select>
        <textarea
          placeholder="Add a comment or note..."
          value={newTask.note}
          onChange={(e) => setNewTask({ ...newTask, note: e.target.value })}
          rows={2} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="t_list">
        {tasks.map((task) => (
          <div key={task.id} className="t_card">
            <h3>{task.title}</h3>
            <p>Client: {task.client}</p>
            <p>Due: {task.dueDate}</p>
            <p>Status: {task.status}</p>
            {task.note && <p><strong>Note:</strong> {task.note}</p>}
          </div>
        ))} </div>
    </div>
  );};

export default Tasks;
