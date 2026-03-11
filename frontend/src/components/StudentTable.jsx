import { useEffect,useState } from "react"
import axios from "axios"
import {
Table,TableHead,TableRow,TableCell,
TableBody,TextField,Button
} from "@mui/material"

function StudentTable(){

const [students,setStudents] = useState([])
const [search,setSearch] = useState("")

useEffect(()=>{

axios.get("/api/students")
.then(res=>setStudents(res.data))

},[])

const deleteStudent = async (id)=>{

await axios.delete(`/api/students/${id}`)

setStudents(students.filter(s=>s.id!==id))

}

const filtered = students.filter(s =>
s.name.toLowerCase().includes(search.toLowerCase())
)

return(

<div>

<TextField
placeholder="Search student..."
onChange={e=>setSearch(e.target.value)}
sx={{mb:2}}
/>

<Table>

<TableHead>

<TableRow>
<TableCell>Name</TableCell>
<TableCell>Email</TableCell>
<TableCell>Course</TableCell>
<TableCell>Age</TableCell>
<TableCell>Action</TableCell>
</TableRow>

</TableHead>

<TableBody>

{filtered.map(s => (

<TableRow key={s.id}>

<TableCell>{s.name}</TableCell>
<TableCell>{s.email}</TableCell>
<TableCell>{s.course}</TableCell>
<TableCell>{s.age}</TableCell>

<TableCell>

<Button color="error"
onClick={()=>deleteStudent(s.id)}>
Delete
</Button>

</TableCell>

</TableRow>

))}

</TableBody>

</Table>

</div>

)

}

export default StudentTable