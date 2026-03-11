import { useEffect, useState } from "react";
import axios from "axios";

function StudentsList() {
  const [students, setStudents] = useState([]);

  const loadStudents = async () => {
    try {
      const res = await axios.get("/api/students");
      setStudents(res.data);
    } catch (error) {
      console.error("Error loading students:", error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`/api/students/${id}`);
      loadStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registered Students</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "15px",
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
              Name
            </th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
              Email
            </th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
              Course
            </th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
              Age
            </th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((s) => (
              <tr key={s.id}>
                <td style={{ padding: "8px" }}>{s.name}</td>
                <td style={{ padding: "8px" }}>{s.email}</td>
                <td style={{ padding: "8px" }}>{s.course}</td>
                <td style={{ padding: "8px" }}>{s.age}</td>
                <td style={{ padding: "8px" }}>
                  <button
                    onClick={() => deleteStudent(s.id)}
                    style={{
                      backgroundColor: "#e74c3c",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      cursor: "pointer",
                      borderRadius: "4px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "12px" }}>
                No students registered yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;