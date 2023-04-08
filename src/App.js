import './App.css';
import 'bulma/css/bulma.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar/NavBar';
import Asm2Layout from './Layout/MainLayout/Asm2Layout';
import Footer from './component/Footer/Footer';
import Home from './Layout/HomeLayout/HomeLayout';
import StaffListComponent from './component/StaffList/staffListComponent';
import DetailStaffComponent from './component/DetailStaff/DetailStaffComponent';
import DepartmentListComponent from './component/DepartmentList/DepartmentListComonent';
import SalaryListComponent from './component/SalaryList/SalaryListComponent';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/asm2' element={<Asm2Layout />}>
            <Route index element={<StaffListComponent/>} />
            <Route path='/asm2/detail/:id' element={<DetailStaffComponent />} />
            <Route path='/asm2/list_department' element={<DepartmentListComponent/>} />
            <Route path='/asm2/list_salary' element={<SalaryListComponent/>} />

          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
