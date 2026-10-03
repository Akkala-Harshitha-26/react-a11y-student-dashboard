import { useState } from 'react';
import Header from './components/Header.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import StudentForm from './components/StudentForm.jsx';
import StudentModal from './components/StudentModal.jsx';

// VERSION: AFTER (accessibility issues fixed)
export default function App() {
  const [showModal, setShowModal] = useState(false);

  const student = {
    name: 'Asha Reddy',
    email: 'asha.reddy@example.com',
    department: 'Computer Science',
    phone: '98765 43210',
    year: 'Third Year',
    rollNo: 'CS2023-045',
  };

  return (
    <div className="app">
      {/* Skip link: lets keyboard users jump past the navigation */}
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <main id="main" className="content">
        <h1 className="page-title">Student Dashboard</h1>
        <p className="subtitle">Manage your student profile and details</p>

        <ProfileCard student={student} />

        <button className="btn-open" onClick={() => setShowModal(true)}>
          View student details
        </button>

        <StudentForm />
      </main>

      {/* The modal remembers the button that opened it and returns focus there on close */}
      {showModal && (
        <StudentModal student={student} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
