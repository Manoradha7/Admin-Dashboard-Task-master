import "./App.css";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Contents } from "./Contents";

export const drawerWidth = 250;

export default function App() {
  return (
    <div className="App">
      {/* Calling the sidebar function component */}
      <Sidebar />
      {/*Calling the navbar function component */}
      <Navbar />
      {/* Calling the contents function  component */}
      <Contents />
    </div>
  );
}
