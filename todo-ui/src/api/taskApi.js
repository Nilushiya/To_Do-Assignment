// src/api/taskApi.js
const API_URL = "http://localhost:8085/api/tasks";

export const fetchTasks = async (token, keycloak) => {
  try {
    let response = await fetch(`${API_URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
    });

    if (!response.ok) throw new Error('Failed to fetch tasks');

    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const addTask = async (task, token, keycloak) => {
    console.log("token:, task:",token, task);
  try {
    let response = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify(task)
    });
    return await response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const completeTask = async (taskId, token, keycloak) => {
    console.log("taskId:" ,taskId);
  try {
    let response = await fetch(`${API_URL}/${taskId}`, {
      method: 'PUT',
      headers: { Authorization: 'Bearer ' + token }
    });

    if (!response.ok) throw new Error('Failed to complete task');

    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
