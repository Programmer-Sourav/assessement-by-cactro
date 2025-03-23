import "../pages/googlebutton.css"

export default function DummyGoogleButtonDesign() {
    return (
      <button className="google-login-button">
        <img
          src="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg"
          alt="Google Logo"
          className="google-logo"
        />
        Login with Google
      </button>
    );
  }