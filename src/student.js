function Student(props){
return(
    <>
    <tr><td>{props.index+1}</td><td>{props.name}</td><td>{props.rollno}</td></tr>
    </>
)
}
export default Student