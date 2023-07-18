import HeroSection from "./components/HeroSection";
import NavTabs from "./components/NavTabs";
import { Navbar } from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Signin from "./Pages/Signin";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
function App() {
  return (
    <div className="min-w-[320px] bg-[#E3E6E6]">
      <Navbar />
      <NavTabs />
      <Signin />
      <Register />
      <Profile />
      <HeroSection />
      <Sidebar />
    </div>
  );
}

export default App;
