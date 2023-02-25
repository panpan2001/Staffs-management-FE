import './App.css';
import 'bulma/css/bulma.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Asm1Layout from './Layout/Asm1Layout';
import StaffDetailComponent from './component/staffDetailComponent';
import StaffListComponent from './component/staffListComponent';
import NavBar from './component/NavBar';
import Asm2Layout from './Layout/Asm2Layout';
import Footer from './component/Footer';
import Home from './Layout/HomeLayout';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/asm1' element={<Asm1Layout />}>
            {/* <Route path='/list_staff' element={<StaffListComponent/>}/> */}
            <Route path='/asm1/:id' element={<StaffDetailComponent />} />
          </Route>
          <Route path='/asm2' element={<Asm2Layout/>}>

          </Route>
        </Routes>
   <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
