import { useEffect,useState } from "react"
import axios from "axios"
import { Grid,Card,CardContent,Typography } from "@mui/material"

function Dashboard(){

const [students,setStudents] = useState([])

useEffect(()=>{

axios.get("/api/students")
.then(res=>setStudents(res.data))

},[])

return(

<Grid container spacing={3}>

<Grid item xs={4}>

<Card>

<CardContent>

<Typography variant="h6">Total Students</Typography>

<Typography width="500px" height="100px" variant="h3">
{students.length}
</Typography>

</CardContent>

</Card>

</Grid>

</Grid>

)

}

export default Dashboard