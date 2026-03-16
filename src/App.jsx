import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router"; // fixed import
import StudentDetails from "./components/StudentDetails";
import Home from "./pages/Home";

// RegistrationForm component
function RegistrationForm({ students, setStudents }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /\S+@\S+\.\S+/;

    if (!name || !email || !course) {
      setError("All fields are required");
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Invalid email format");
      return;
    }

    const newStudent = {
      id: (students.length + 1).toString(),
      name,
      email,
      course,
    };

    setStudents([...students, newStudent]);
    setError("");
    alert("Student Registered Successfully!");

    // Redirect to student details
    navigate(`/student/${newStudent.id}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Registration</h1>
      <Link to="/home" style={{ display: "inline-block", marginBottom: "20px" }}>
        ← Go to Home
      </Link>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="text"
            placeholder="Enter Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button disabled={!name || !email || !course}>Submit</button>
      </form>
    </div>
  );
}

// App component
function App() {
  const [students, setStudents] = useState([]);

  return (
    <BrowserRouter>
      {/* Navbar for Home link */}
      <nav style={{ textAlign: "center", margin: "20px 0" }}>
        <Link to="/">Register</Link> | <Link to="/home">Home</Link>
      </nav>

      <Routes>
        {/* Registration page */}
        <Route
          path="/"
          element={<RegistrationForm students={students} setStudents={setStudents} />}
        />

        {/* Home page showing all students */}
        <Route path="/home" element={<Home students={students} />} />

        {/* Dynamic student details page */}
        <Route path="/student/:id" element={<StudentDetails students={students} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;