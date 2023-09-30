// import Navbar from "./components/Navbar/Navbar";

import Main_page from "./components/Main_page";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main_page />}></Route>
        </Routes>
      </BrowserRouter>
    // <>
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Main_page/>}></Route>
    // </Routes>
    // </BrowserRouter>
    //   {/* <Navbar /> */}
      
    //   {/* <Navbar1 />
    //   <Home /> */}
    // </>
  );
}

export default App;
