import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthRoutes from "./routes/AuthRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <AuthRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
