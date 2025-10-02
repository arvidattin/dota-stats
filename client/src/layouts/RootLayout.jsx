import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex flex-col  min-h-screen">  {/* <-- fix here */}
      <Navbar />
      <main className="flex-1 bg-slate-950">
      
          <Outlet />
        
      </main>
    </div>
  );
}