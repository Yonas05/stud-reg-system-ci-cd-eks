import { useEffect, useState } from "react"
import axios from "axios"

function StudentsList(){

const [students,setStudents] = useState([])

const loadStudents = async () => {
const res = await axios.get("http://localhost:5000/students")
setStudents(res.data)
}

const deleteStudent = async (id) => {

await axios.delete(`http://localhost:5000/students/${id}`)
loadStudents()

}

useEffect(()=>{
loadStudents()
},[])

return(

<div>

<h2>Registered Students</h2>

<table>

<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Course</th>
<th>Age</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{students.map(s => (

<tr key={s.id}>

<td>{s.name}</td>
<td>{s.email}</td>
<td>{s.course}</td>
<td>{s.age}</td>

<td>
<button onClick={()=>deleteStudent(s.id)}>Delete</button>
</td>

</tr>

))}

</tbody>

</table>

</div>

)
}

export default StudentsList