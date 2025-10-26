import React, { useState } from 'react';
import '../style/AddTask.scss';
import { FiLogOut } from 'react-icons/fi';
import { useKeycloak } from '@react-keycloak/web';

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const { keycloak } = useKeycloak();
  const [errors, setErrors] = useState({});

  const handleLogout = () => {
    keycloak.logout();
  };

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!desc.trim()) {
      newErrors.desc = 'Description is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitTask = (e) => {
    e.preventDefault();
    validate();
    onAdd({ title, description: desc });
    setTitle('');
    setDesc('');
  };

  return (
    <div className="add-task-container">
      
      <form onSubmit={submitTask}>
        <h2>Add a Task</h2> 
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="error-text">{errors.title}</p>}
        </div>

        <div className="form-group">
          <textarea
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          {errors.desc && <p className="error-text">{errors.desc}</p>}
        </div>
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
