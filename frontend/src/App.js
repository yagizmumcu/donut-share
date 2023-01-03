import logo from './logo.svg';
import './App.css';
import {Register} from './pages/Register'
import {Navbar} from './components/shared/Navbar'
import {Dashboard} from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Control } from './pages/control';
import { Moderator_Panel } from './pages/control';
import { Admin_Panel } from './pages/Admin_panel';


function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Register />}>
                  </Route>
                  <Route path="/control" element={<Control />}></Route>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/admin" element={<Admin_Panel />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
