import { useState } from 'react';

// FIXED: every input has a <label> linked with htmlFor/id, correct input types,
// autocomplete hints, and the success message is announced by role="status".
export default function StudentForm() {
  const [form, setForm] = useState({ name: '', email: '', department: '', phone: '' });
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
  };

  return (
    <section className="card" aria-labelledby="info-heading">
      <h2 id="info-heading" className="section-title">Student Information</h2>
      <p className="hint" id="form-hint">Fill in your details and press Save.</p>

      <form onSubmit={handleSubmit} aria-describedby="form-hint">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name"
            value={form.name} onChange={handleChange} />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email"
            value={form.email} onChange={handleChange} />
        </div>

        <div className="field">
          <label htmlFor="department">Department</label>
          <select id="department" name="department" value={form.department} onChange={handleChange}>
            <option value="">Select a department</option>
            <option>Computer Science</option>
            <option>Electronics</option>
            <option>Mechanical</option>
            <option>Civil</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel"
            value={form.phone} onChange={handleChange} />
        </div>

        <button type="submit" className="btn-save">Save</button>
      </form>

      {/* role="status" makes screen readers announce the message when it appears */}
      <div role="status" className="success">
        {saved ? 'Student details saved!' : ''}
      </div>
    </section>
  );
}
