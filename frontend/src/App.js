import logo from './logo.svg';
import './App.css';
import {Register} from './pages/Register'
import {Navbar} from './components/shared/Navbar'
import {Dashboard} from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Register />}>
                  </Route>
                  <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
