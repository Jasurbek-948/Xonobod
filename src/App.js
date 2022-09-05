import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
    </div>
    </BrowserRouter>
  );
}

export default App;
