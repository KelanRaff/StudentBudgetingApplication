import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from 'react';
import { Login } from './Login/Login';
import { BudgetDisplay } from './Components/BudgetDisplay'
import Layout from './Components/Layout';
import { Register } from './Login/Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="budget" element={<BudgetDisplay />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
