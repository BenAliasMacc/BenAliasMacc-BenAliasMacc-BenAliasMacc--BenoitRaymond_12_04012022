import { Routes, Route} from "react-router-dom";
import './App.css';
import NavbarTop from './component/NavbarTop';
import NavbarLeft from "./component/NavbarLeft";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavbarTop/>
      <main>
        <NavbarLeft/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:id" element={<Dashboard/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
