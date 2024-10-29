import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

//Este es el componente principal de la aplicacion
const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <nav>
        <button onClick={() => setIsLogin(true)}>Iniciar sesion</button>
        <button onClick={() => setIsLogin(false)}>Registrarse</button>
      </nav>
      {isLogin ? <Login /> : <Register />}
    </div>
  );
};

//Este componente este disponible para ser reutilizado
export default App;