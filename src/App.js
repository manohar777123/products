import react from "react"
import Home from "./Home"
import About from "./about"
import Service from './service'
import Contact from "./contact"
import Event from "./event"
import Menu from "./menu"
import Hooks from "./hooks"

// import Student from ".Student//";
import Trainees from "./trainees";
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Student from "./student"
import Hooks1 from "./hooks.1"
import Newproducts from "./product"
import Categories from "./categories"
import Singleproduct from "./singleproduct"
import Getproductslist from "./getproductslist"
function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <Menu/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Trainees" element={<Trainees/>}/>
      <Route path="/Student" element={<Student/>}/>
      <Route path="/event" element={<Event/>}/>
      <Route path="/hooks" element={<Hooks/>}/>
      <Route path="/hooks1" element={<Hooks1/>}/>
      <Route path="/products" element={<Newproducts/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path ="/products/:id" element={<Singleproduct/>}/>
      <Route path="/getProducstlist" element={<Getproductslist/>}/>


      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
