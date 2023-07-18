import NavTabs from "./components/NavTabs";
import { Navbar } from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-w-[320px]">
      <Navbar />
      <NavTabs />
      <Sidebar />
    </div>
  );
}

export default App;
