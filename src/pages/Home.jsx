import { Link } from "react-router";

export default function Home({ students }) {
  return (
    <div className="home-container">
      <h1>Registered Students</h1>
      {students.length === 0 ? (
        <p className="no-students">No students registered yet.</p>
      ) : (
        <div className="students-list">
          {students.map((student) => (
            <Link
              key={student.id}
              to={`/student/${student.id}`}
              className="student-card"
            >
              <h2>{student.name}</h2>
              <p>Course: {student.course}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}