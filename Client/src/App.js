import './App.css';
import Graph from './Components/Graph';
import Form from './Components/Form';
import { useState } from 'react';
import { Login } from './Login/Login';
import { Register } from './Login/Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <div className="Container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Student Budgeting App</h1>
          {
            currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
          }
          {/* Grid Columns*/}
          <div className="grid md:grid-cols-2 gap-4">
            {/*<Graph></Graph>
            <Form></Form>*/}
          </div>
      </div>
    </div>
  );
}

export default App;
