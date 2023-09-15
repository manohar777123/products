import { useState } from "react";
function Hookfruit(){
    const[arr, setArr]= useState(['apple','banana','berry','apple'])
    const [fruitname, setFruitname]= useState('')
    const Filtersfruits = () => {
        let filteredarray = arr.filter((ele)=>{
            return (ele===fruitname)

        })
        if(filteredarray.length==0){
            setArr(['apple','banana','berry','apple'])
        }else{
            setArr(filteredarray)
        }   
         
    }
    return(
        <>
         <h1>Fruits Market</h1> 
         <input type="text" onChange={(e)=>setFruitname(e.target.value)}/>
         <button onClick={Filtersfruits}>check Fruits</button>
         <br />
         <ul style={{display:"inline-block"}}>
            {
                arr.map((ele,i)=>{
                    return (<li>{ele}</li>)
                })
            }
         </ul>
        </>
    )
}    
export default Hookfruit
