import './App.css';
import 'bulma/css/bulma.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Asm1Layout from './Layout/Asm1Layout';
import StaffDetailComponent from './component/ASM1/staffDetailASM1Component';
import NavBar from './component/NavBar';
import Asm2Layout from './Layout/Asm2Layout';
import Footer from './component/Footer';
import Home from './Layout/HomeLayout';
import DetailStaff from './component/ASM2/DetailStaffComponent';
import StaffListComponent from './component/ASM2/staffListComponent';
import StaffDetailASM1Component from './component/ASM1/staffDetailASM1Component';
import DetailStaffComponent from './component/ASM2/DetailStaffComponent';
import DepartmentListComponent from './component/ASM2/DepartmentListComonent';
import SalaryListComponent from './component/ASM2/SalaryListComponent';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/asm1' element={<Asm1Layout />}>
       
            <Route path='/asm1/:id' element={<StaffDetailASM1Component />} />
          </Route>
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
