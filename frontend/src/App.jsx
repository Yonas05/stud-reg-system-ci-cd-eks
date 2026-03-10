import { BrowserRouter,Routes,Route } from "react-router-dom"

import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import RegisterStudent from "./pages/RegisterStudent"
import Students from "./pages/Students"

function App(){

return(

<BrowserRouter>

<Sidebar/>

<div style={{marginLeft:240,padding:20}}>

<Routes>

<Route path="/" element={<Dashboard/>}/>

<Route path="/register" element={<RegisterStudent/>}/>

<Route path="/students" element={<Students/>}/>

</Routes>

</div>

</BrowserRouter>

)

}

export default App