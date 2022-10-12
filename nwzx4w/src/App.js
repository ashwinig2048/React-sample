import "./styles.css";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState({
    themeType: "constast",
    themeShade: "primary"
  });
  const changeTheme = (revTheme) => {
    console.log("revTheme", revTheme);
    setTheme((prevState) => ({ ...prevState, ...revTheme }));
    console.log("theme", theme);
  };

  return (
    <div className={theme.themeType + "-" + theme.themeShade}>
      <div className="app">
        <h1> Login</h1>
        <div className="container">
          <form>
            <div class="email">
              <label>E-mail</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div class="password">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="remember">
              <input type="checkbox" defaultChecked />
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
        </div>
      </div>
      <div
        className="theme-toggle"
        onClick={(event) => {
          event.preventDefault();
          changeTheme({ themeShade: event.target.value });
        }}
      >
        <input
          id="primary"
          type="radio"
          checked={theme.themeShade === "primary"}
          name="theme-shade"
          value="primary"
        />{" "}
        <label for="primary">Primary Theme</label>
        <input
          type="radio"
          checked={theme.themeShade === "secondary"}
          name="theme-shade"
          value="secondary"
          id="secondary"
        />{" "}
        <label for="secondary">Secondary Theme</label>
      </div>
      <div class="theme-button-container">
        <button
          onClick={(event) => {
            event.preventDefault();
            changeTheme({ themeType: "constast" });
          }}
        >
          Constast Theme
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            changeTheme({ themeType: "dark" });
          }}
        >
          Dark Theme
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            changeTheme({ themeType: "light" });
          }}
        >
          Light Theme
        </button>
      </div>
    </div>
  );
};
export default App;
