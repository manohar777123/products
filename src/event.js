function Events(){
     let trainees=[{
        name:"manohar",
        rollno:404
     },
    {
        name:"son",
        rollno:504
    }];
    const getdata=(res)=>{
        res.map((ele,i)=>{
            document.write(i+1+"."+ele.name+" "+ele.rollno+"<br>");
        });
    };
    return(
        <div>
            <h1>Events</h1>
             <h2 style={{color:"red"}}> Hii this is Home</h2>
       <button  onClick={getdata}> Click here</button>
        </div>
    );
}
export default Event