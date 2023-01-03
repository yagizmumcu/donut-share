import logo from './logo.svg';
import './App.css';
import {Register} from './pages/Register'
import {Navbar} from './components/shared/Navbar'
import {Dashboard} from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Control } from './pages/control';
import { Moderator_Panel } from './pages/Moderator_panel';
import { Admin_Panel } from './pages/Admin_panel';

import { Add_moderator } from './pages/Add_moderator';
import {UserList} from './pages/UserList';



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
                  <Route path="/moderator" element={<Moderator_Panel />} />
                  <Route path="/add_mod" element={<Add_moderator />} />
                  <Route path="/list" element={<UserList/>}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
