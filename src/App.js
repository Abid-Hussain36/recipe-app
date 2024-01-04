import './App.css';
import Detail from './components/Detail';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:recipeId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
