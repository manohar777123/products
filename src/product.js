import { useEffect,useState } from "react";
import axios from "axios"; // npm i axios
import './product.css';
import { Link } from "react-router-dom";
{/* <Link to ="/Singleproduct"></Link> */}
<Link to ="/Getproductslist"></Link>


function Newproducts(){
    const [data,setData] = useState([]); 
    const [cnt,setCnt] = useState(0); 
    const api = 'https://fakestoreapi.com/products';
    useEffect(()=>{
        getProductlist()
    },[cnt])

    const getProductlist = () =>{
        axios.get(api).then((response) => { 
         
            setData(response.data);            
        });
        console.log(data)
    }
    return (
        <>
            <p>{cnt}</p>
            <button onClick={()=>setCnt(cnt+1)}>count</button>
            <div className="products-list">
            {
                data.map((ele,i)=>{
                    return(
                        <div className="card">
                        <Link to={'../singleproduct/${ele.id}'}>
                            <img src={ele.image}/>
                            <p>{ele.title}</p>
                            <p>{ele.price}</p>
                            <p>{ele.category}</p>
                            </Link>
                        </div>                        
                    )
                })
            }
            </div>
        </>
    )
    
}
export default Newproducts
