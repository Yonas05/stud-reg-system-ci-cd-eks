
import { Box, Typography, Paper } from "@mui/material";
import StudentTable from "../components/StudentTable";


function Students() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Students
      </Typography>

      <Paper sx={{ padding: 3, backgroundColor: "#fff", color: "#000" }}>
        <StudentTable />
      </Paper>
    </Box>
  );
}
export default Students;