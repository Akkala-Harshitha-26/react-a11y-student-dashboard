// FIXED: meaningful alt text, proper heading (h2), section landmark, readable contrast.
export default function ProfileCard({ student }) {
  return (
    <section className="card profile" aria-labelledby="profile-heading">
      <img
        src="/profile.svg"
        className="avatar"
        width="96"
        height="96"
        alt={`Portrait of ${student.name}`}
      />
      <div>
        <h2 id="profile-heading" className="profile-name">{student.name}</h2>
        <p className="profile-dept">{student.department} - {student.year}</p>
        <p className="roll">Roll No: {student.rollNo}</p>
      </div>
    </section>
  );
}
