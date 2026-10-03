// FIXED: <header> + <nav> landmarks, a list of real links (<a href>) that Tab can reach.
export default function Header() {
  return (
    <header className="header">
      <div className="logo">EduPortal</div>
      <nav aria-label="Main">
        <ul className="nav">
          <li><a className="nav-item" href="#main">Home</a></li>
          <li><a className="nav-item" href="#profile-heading">Profile</a></li>
          <li><a className="nav-item" href="#info-heading">Information</a></li>
        </ul>
      </nav>
    </header>
  );
}
