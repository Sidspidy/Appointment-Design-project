import "./Header.css";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="bar-container">
          <div className="logo-nav">
            <img
              src="https://s3-alpha-sig.figma.com/img/503f/f9c0/bff6fd7d5705b1c51f69ea8e8c5ac172?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ii4ILaw~ofjCz1bJBVQgQdhMvHDgJm75IUGjmynHUtDaNUmcY31sParVdDxPsYQxkAITrgTOzg1~KGVXZmM50rotR8CEzAIX4NGQt6u2qA8SUcKLUCRpZMfvJBIlHSpcOPRGg4rg9l95YkjPJsV1kOHTE3cseacSVQ~u7vkVSa196umXlx8RJtrD1GgKb8~ABb4VE9oQI8-ijUQ0j5TwF~7liaAR1-lsClG1OiftiRwYlcK0eCR-0XOy7jx90pVWGM-UYuffrOsYYVFGCvZn8If9QxaRpiAUg5qDDkXYP7HRw92fv3Pm8aJdhebdvGlCxxN-eGYJ5aM~BgxPwA7dRg__"
              alt="Logo"
              className="logo"
            />
            <nav className="nav-items">
              <li className="nav-item">Home</li>
              <li className="nav-item find">Find Doctor</li>
              <li className="nav-item">About Us</li>
            </nav>
          </div>
          <div className="nav-btns">
            <button className="login-btn">Login</button>
            <button className="sign-btn">Sign-up</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
