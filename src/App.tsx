import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages";
function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
