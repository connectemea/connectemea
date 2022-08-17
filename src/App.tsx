import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Join } from "./components/pages";
import HomeLayout from "./components/layout/homeLayout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/join" element={<Join />} />
      </Route>
    </Routes>
  );
}

export default App;
