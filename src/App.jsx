import { useState } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const [error, setError] = useState("");

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

    setError("");
    alert("Student Registered Successfully!");
  };

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>

      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <br/>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <br/>

        {/* Course */}
        <div>
          <input
            type="text"
            placeholder="Enter Course"
            value={course}
            onChange={(e)=>setCourse(e.target.value)}
          />
        </div>

        <br/>

        {error && <p style={{color:"red"}}>{error}</p>}

        <button disabled={!name || !email || !course}>
          Submit
        </button>

      </form>

    </div>
  );
}

export default App;