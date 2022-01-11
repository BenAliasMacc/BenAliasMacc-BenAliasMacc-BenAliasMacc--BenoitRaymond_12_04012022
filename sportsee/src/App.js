import { Routes, Route} from "react-router-dom";
import './App.css';
import NavbarTop from './component/NavbarTop';
import NavbarLeft from "./component/NavbarLeft";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <NavbarTop/>
      <main>
        <NavbarLeft/>
        <Routes>
          <Route path="/:id" element={<Dashboard/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
