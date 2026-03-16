import { useParams } from "react-router";

export default function StudentDetails({ students }) {
  const { id } = useParams();
  const student = students.find((s) => s.id === id);

  if (!student) {
    return <h2 style={{ color: "red", textAlign: "center", marginTop: "50px" }}>Student not found</h2>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "50px auto", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h1>Student Details</h1>
      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Course:</strong> {student.course}</p>
    </div>
  );
}