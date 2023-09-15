import { useState } from "react"

function Hooks(){
    const [cnt,setCnt]= useState(0) //const cnt=0; 2nd arg is function name

    return(
        <>
          <h1>React Hooks</h1>
          <p>Count is:{cnt}</p>
          <button onClick={()=>setCnt(cnt+1)}>Increment by 1</button>
        </>
    )
}
export default Hooks