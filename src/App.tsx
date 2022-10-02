import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Join } from "./pages";
import HomeLayout from "./components/layout/homeLayout";
import { LoadingProvider } from "./context/loadingContext";

function App() {
  return (
    <LoadingProvider>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/join" element={<Join />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </LoadingProvider>
  );
}

export default App;
