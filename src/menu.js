import {Link} from "react-router-dom";
import Home from "./Home";
import About from "./about";
import Service from "./service";
import Contact from "./contact";
import Trainees from "./trainees";
import Categories from "./categories";
import Singleproduct from "./singleproduct";
import Getetproductslist from "./getproductslist";
function Menu(){
    return(
        <div>
        <Link to = "/">Home</Link>
        <Link to = "/About">About</Link>
        <Link to = "/Service">Service</Link>
        <Link to = "/Contact">Contact</Link>
        <Link to ="/hooks.js">Hooks</Link>
        <Link to ="/trainees.js">Trainees</Link>
        <Link to ="/event.js">Events</Link>
        <Link to ="/products">New products</Link>
        <Link to ="/categories">Categories</Link>
        <Link to ="/singleproduct">single product</Link>
       <Link to ="/getproductlist">Get products list</Link>
    </div>

    )
}
export default Menu;