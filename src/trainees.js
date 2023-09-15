import student from "./student"
function Trainees(){
    let trainees=[{
        name:'Kiran',
        rollno:'123'

    },{
        name:'Raju',
        rollno:4455
    }]
    return(
        <>
        <h2>Trainees List</h2>
        <table border={1} cellSpacing={0} align="center" width ={"300px"}>
        <tr><th>S.no</th><th>Name</th><th>Roll no</th></tr>
        {
            trainees.map((ele,i)=>{
                return <student index={i} name={ele.name} roll no={ele.rollno} />
            })

        }
        </table>
        </>
        )   
        
}
export default Trainees