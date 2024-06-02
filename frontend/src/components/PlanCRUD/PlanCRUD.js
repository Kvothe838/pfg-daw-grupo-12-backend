// src/components/PlanCRUD/PlanCRUD.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlanCRUD.css';
import Modal from '../Modal/Modal';

const PlanCRUD = ({ plans, onDelete, onSelectPlan }) => {
  const navigate = useNavigate();
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleDelete = (id) => {
    onDelete(id);
    setModalMessage('Plan deleted successfully!');
    setShowModal(true);
  };

  const handleUpdate = (id) => {
    onSelectPlan(id);
    navigate('/update-plan');
  };

  const handleCreate = () => {
    navigate('/create-plan');
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  return (
    <div className='containers'>
      <h2>Plans</h2>
      <button onClick={handleCreate} className="button create-button">Create New Plan</button>
      <ul className="plan-list">
        {plans.map(plan => (
          <li key={plan.id} className="plan-item">
            <span>{plan.title}</span>
            <button onClick={() => handleUpdate(plan.id)} className="button update-button">Update</button>
            <button onClick={() => handleDelete(plan.id)} className="button delete-button">Delete</button>
          </li>
        ))}
      </ul>
      {showModal && (
        <Modal message={modalMessage} onClose={closeModal} />
      )}
    </div>
  );
};

export default PlanCRUD;
