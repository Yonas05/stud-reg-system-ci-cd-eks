import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="nav">
      <h2>Student System</h2>

      <div>
        <Link to="/">Register</Link>
        <Link to="/students">Students</Link>
      </div>
    </nav>
  )
}

export default Navbar