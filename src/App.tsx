import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
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
      <Input
        label="Nombre de Usuario"
        placeholder="Ingrese su nombre de usuario"
        name="username"
        value={username}
        onInputChange={onChangeUsername}
      />
      <Input
        label="Contraseña"
        placeholder="Ingrese su contraseña"
        name="password"
        value={password}
        onInputChange={onChangePassword}
        type="password"
      />
      <Button isActive={isActive} onClick={handleClick} disabled={!isActive}>
        Iniciar Sesión
      </Button>
    </div>
  );
}

export default App;
