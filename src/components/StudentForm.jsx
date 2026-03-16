import { useState } from "react";

function StudentForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [courseError, setCourseError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    // Name validation
    if (!name) {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }

    // Email validation
    const emailPattern = /\S+@\S+\.\S+/;

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } 
    else if (!emailPattern.test(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } 
    else {
      setEmailError("");
    }

    // Course validation
    if (!course) {
      setCourseError("Course is required");
      valid = false;
    } else {
      setCourseError("");
    }

    if (valid) {
      alert("Student Registered!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Student Registration</h2>

      {/* Name */}
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p style={{color:"red"}}>{nameError}</p>}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p style={{color:"red"}}>{emailError}</p>}
      </div>

      {/* Course */}
      <div>
        <input
          type="text"
          placeholder="Enter Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        {courseError && <p style={{color:"red"}}>{courseError}</p>}
      </div>

      <button disabled={!name || !email || !course}>
        Submit
      </button>

    </form>
  );
}

export default StudentForm;