import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Vehicles from "./pages/Vehicles";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddVehicle from "./pages/AddVehicle";
import EditVehicle from "./pages/EditVehicle";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/add' element={<AddUser />} />
          <Route path='/users/edit/:id' element={<EditUser />} />
          <Route path='/vehicles' element={<Vehicles />} />
          <Route path='/vehicles/add' element={<AddVehicle />} />
          <Route path='/vehicles/edit/:id' element={<EditVehicle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
