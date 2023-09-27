import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { LoginPage } from './pages/LoginPage';
import { CreateRecipe } from './pages/CreateRecipe';
import { SavedRecipe } from './pages/SavedRecipe';
import { Navbar } from './components/Navbar';
import { RegisterPage } from './pages/RegisterPage';
import Footersection from './components/Footersection';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<LoginPage/>}/>
          <Route path='/Register' element={<RegisterPage/>}/>
          <Route path='/CreateRecipe' element={<CreateRecipe/>}/>
          <Route path='/SavedRecipe' element={<SavedRecipe/>}/>
        </Routes>
        <Footersection/>
      </Router>
    </div>
  );
}

export default App;
