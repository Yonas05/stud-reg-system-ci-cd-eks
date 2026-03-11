import { useState } from "react"
import axios from "axios"
import { TextField,Button,Paper,Typography } from "@mui/material"

function RegisterStudent(){

const [form,setForm] = useState({
name:"",
email:"",
course:"",
age:""
})

const handleChange = e =>{
setForm({...form,[e.target.name]:e.target.value})
}

const submit = async ()=>{

await axios.post("/api/students",form)

alert("Student Registered")

}

return(

<Paper sx={{padding:4,width:400}}>

<Typography variant="h5">Register Student</Typography>

<TextField fullWidth label="Student Name" name="name" onChange={handleChange} sx={{mt:2}}/>

<TextField  fullWidth  label="Email"  name="email"  placeholder="Enter your email"  onChange={handleChange}  sx={{ mt: 2 }}
/>
<TextField fullWidth label="Course" name="course" onChange={handleChange} sx={{mt:2}}/>

<TextField fullWidth label="Age" name="age" onChange={handleChange} sx={{mt:2}}/>

<Button variant="contained" sx={{mt:2}} onClick={submit}>
Register
</Button>

</Paper>

)

}

export default RegisterStudent