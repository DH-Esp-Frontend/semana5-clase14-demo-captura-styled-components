import React, { useEffect, useState } from "react";
import { useInput } from "./hooks/useInput";
import "./App.css";

function App() {
  const [isActive, setIsActive] = useState(false);
  const { value: username, onChange: onChangeUsername } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");

  const handleClick = () => {
    setIsActive(false);
    setTimeout(() => {
      alert("Bienvenido " + username + "!");
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    if (
      username.match(/^[a-zA-Z0-9]{3,}$/) &&
      password.match(/^[a-zA-Z0-9]{3,}$/)
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [username, password]);

  return (
    <div className="App">
      <h1>Iniciar Sesión</h1>
      <input
        placeholder="Ingrese su nombre de usuario"
        name="username"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        placeholder="Ingrese su contraseña"
        name="password"
        value={password}
        onChange={onChangePassword}
        type="password"
      />
      <button disabled={!isActive} onClick={handleClick} >
        Iniciar Sesión
      </button>
    </div>
  );
}

export default App;
