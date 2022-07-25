import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages";
import HomeLayout from "./layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<div>form</div>} />
      </Route>
    </Routes>
  );
}

export default App;
