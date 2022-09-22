import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CadastroUsers from './pages/CadastroUsers';

import Home from './pages/Home';
import Login from './pages/Login';
import Task from './pages/Tasks';
import TaskForm from './pages/Tasks/Form'


const Routess: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tarefas" element={<Task />} />
      <Route path="/tarefas_cadastro" element={<TaskForm />} />
      <Route path="/tarefas_cadastro/:id" element={<TaskForm />} />
      <Route path="/cadastro_users" element={<CadastroUsers />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Routess;