import React, { useState } from 'react';
import '../style/AddTask.scss';
import { FiLogOut } from 'react-icons/fi';
import { useKeycloak } from '@react-keycloak/web';

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const { keycloak } = useKeycloak();

  const handleLogout = () => {
    keycloak.logout();
  };

  const submitTask = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, description: desc });
    setTitle('');
    setDesc('');
  };

  return (
    <div className="add-task-container">
      
      <form onSubmit={submitTask}>
        <h2>Add a Task</h2> 
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button type="submit">Add</button>
        <div className="logout-section" onClick={handleLogout}>
          <FiLogOut size={22} className="logout-icon" />
          <span className="logout-text">Logout</span>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
