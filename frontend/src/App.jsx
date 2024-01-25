import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
// import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
