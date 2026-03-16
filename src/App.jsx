import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import StudentDetails from "./components/StudentDetails";

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
      id: (students.length + 1).toString(), // simple incremental ID
      name,
      email,
      course,
    };

    setStudents([...students, newStudent]);
    setError("");
    alert("Student Registered Successfully!");

    // Redirect to the student's detail page
    navigate(`/student/${newStudent.id}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Registration</h1>

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

function App() {
  const [students, setStudents] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        {/* MAIN PAGE */}
        <Route
          path="/"
          element={<RegistrationForm students={students} setStudents={setStudents} />}
        />

        {/* DYNAMIC ROUTE FOR STUDENT DETAILS */}
        <Route
          path="/student/:id"
          element={<StudentDetails students={students} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;