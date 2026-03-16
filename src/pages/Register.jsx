import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export default function RegistrationForm({ students, setStudents }) {
  const navigate = useNavigate();

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newStudent = {
      id: (students.length + 1).toString(),
      name: data.name,
      email: data.email,
      course: data.course,
    };

    setStudents([...students, newStudent]);
    alert("Student Registered Successfully!");
    navigate(`/student/${newStudent.id}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>
        <br />

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>
        <br />

        {/* Course */}
        <div>
          <input
            type="text"
            placeholder="Enter Course"
            {...register("course", { required: "Course is required" })}
          />
          {errors.course && <p style={{ color: "red" }}>{errors.course.message}</p>}
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}