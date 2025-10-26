import React, { useState, useEffect } from 'react';
import AddTask from '../components/AddTask';
import DisplayTasks from '../components/DisplayTasks';
import '../style/TaskPage.scss';
import '../style/AddTask.scss';
import { useKeycloak } from '@react-keycloak/web';
import { fetchTasks, addTask as addTaskApi, completeTask as completeTaskApi } from '../api/taskApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskPage = () => {
    const { keycloak } = useKeycloak();
    const [tasks, setTasks] = useState([]);

    const refreshTokenOrLogin = async () => {
        if (!keycloak.authenticated) return keycloak.login();

        try {
            const refreshed = await keycloak.updateToken(30); 
            if (!refreshed) console.log('Token still valid');
        } catch (err) {
            toast.error('Refresh failed, redirecting to login');
            keycloak.login();
    }
  };

  const loadTasks = async () => {
    try {
      await refreshTokenOrLogin();
      const data = await fetchTasks(keycloak.token, keycloak);
      setTasks(data);
    } catch (err) {
      console.error('Failed to load tasks', err);
      toast.error('Failed to load tasks');
    }
  };

  useEffect(() => {
    if (keycloak.authenticated) loadTasks();
  }, [keycloak.authenticated]);

  const addTask = async (task) => {
    console.log("add task:", task);
    if (!task.title.trim() || !task.description.trim()) {
      toast.error('Add required fields');
      return;
    }
    try {
      await refreshTokenOrLogin();
      const res = await addTaskApi(task, keycloak.token, keycloak);
      if(res.status === 201){
        toast.success('Task added successfully!');
        loadTasks();
      }
    } catch (err) {
      console.error('Failed to add task', err);
      toast.error('Failed to add task');
    }
  };

  const completeTask = async (taskId) => {
    try {
      await refreshTokenOrLogin();
      await completeTaskApi(taskId, keycloak.token, keycloak);
      toast.success('Task marked as complete!');
      loadTasks();
    } catch (err) {
      console.error('Failed to complete task', err);
      toast.error('Failed to complete task');
    }
  };

  return (
    <div className="task-page">
        <div className="task">
            <AddTask onAdd={addTask} />
            <DisplayTasks tasks={tasks} onComplete={completeTask} />
        </div>

      <ToastContainer 
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default TaskPage;
