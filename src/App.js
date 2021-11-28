import "./App.css";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Contents } from "./Contents";

export const drawerWidth = 240;

export default function App() {
  return (
    <div className="App">
      {/* making the sidebar */}
      <Sidebar />
      {/* making the appbar */}
      <Navbar />
      {/* making the body content */}
      <Contents />
    </div>
  );
}
