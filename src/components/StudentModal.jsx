import { useEffect, useRef } from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

// FIXED:
// - role="dialog" + aria-modal="true" + aria-labelledby gives the modal a name
// - focus moves into the modal when it opens
// - Tab / Shift+Tab stay inside the modal (focus trap)
// - Escape closes it
// - focus returns to the button that opened it
// - the close control is a real <button> with an accessible name
export default function StudentModal({ student, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    // 1. Remember which element had focus (the "View student details" button)
    const opener = document.activeElement;

    // 2. Move focus into the modal. The dialog itself gets focus, so the
    //    screen reader announces its name ("Student Details, dialog").
    dialogRef.current.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      // 3. Focus trap: wrap Tab / Shift+Tab inside the modal
      const items = dialogRef.current.querySelectorAll(FOCUSABLE);
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && (active === first || active === dialogRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // 4. Cleanup runs when the modal closes: remove listener, restore focus
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (opener && opener.focus) opener.focus();
    };
  }, [onClose]);

  return (
    // role="presentation": the dark backdrop is only for mouse users; keyboard users have Escape and the Close button
    <div
      className="overlay"
      role="presentation"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close student details">
          <span aria-hidden="true">&times;</span>
        </button>
        <h2 id="modal-title" className="modal-title">Student Details</h2>
        {/* Decorative here: the name is already written below, so empty alt */}
        <img src="/profile.svg" className="avatar small" width="64" height="64" alt="" />
        <dl className="details">
          <dt>Name</dt><dd>{student.name}</dd>
          <dt>Email</dt><dd>{student.email}</dd>
          <dt>Department</dt><dd>{student.department}</dd>
          <dt>Phone</dt><dd>{student.phone}</dd>
          <dt>Roll No</dt><dd>{student.rollNo}</dd>
        </dl>
        <button className="btn-save" onClick={() => alert('Report downloaded (demo)')}>
          Download report
        </button>
      </div>
    </div>
  );
}
