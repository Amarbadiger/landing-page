export default function Header() {
  return (
    <>
      <nav className="navigation">
        <div className="logo">
          <img src="public/images/brand_logo.jpg" alt="none"></img>
        </div>
        <div className="info">
          <ul>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="login">
          <button className="btn">Login</button>
        </div>
      </nav>
    </>
  );
}
