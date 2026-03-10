import { Drawer,List,ListItem,ListItemText } from "@mui/material"
import { Link } from "react-router-dom"

const Sidebar = () => {

return (

<Drawer variant="permanent">

<List sx={{width:220}}>

<ListItem button component={Link} to="/">
<ListItemText primary="Dashboard"/>
</ListItem>

<ListItem button component={Link} to="/register">
<ListItemText primary="Register Student"/>
</ListItem>

<ListItem button component={Link} to="/students">
<ListItemText primary="Students"/>
</ListItem>

</List>

</Drawer>

)

}

export default Sidebar