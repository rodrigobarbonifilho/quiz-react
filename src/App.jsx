import { Outlet } from "react-router-dom";
import "./global.css";

function App() {
  return (
    <div>
      <h1>Teste</h1>
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default App
