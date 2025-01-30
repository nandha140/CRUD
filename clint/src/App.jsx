
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Users from "./pages/Users";
import Update from "./pages/Update";
import {Toaster} from "react-hot-toast"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register"element={ <Register/>}></Route>
          <Route path="/"element={ <Users/>}></Route>
          <Route path="/update/:id"element={ <Update/>}></Route>
        </Routes>
      </BrowserRouter>
  
      <Toaster position="top-right"/>
    </>
  );
}

export default App;
