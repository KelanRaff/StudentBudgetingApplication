import './App.css';
import Graph from './Components/Graph';

function App() {
  return (
    <div className="App">
      <div className="Container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Student Budgeting App</h1>

          {/* Grid Columns*/}
          <div className="grid md: grid-cols-2 gap-4">
            <Graph></Graph>
          </div>
      </div>
    </div>
  );
}

export default App;
