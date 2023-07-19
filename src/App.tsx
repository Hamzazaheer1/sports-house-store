import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Missing from "./pages/Missing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Signin />} />
        <Route path="register" element={<Register />} />

        {/* private routes */}
        <Route path="profile" element={<Profile />} />

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
