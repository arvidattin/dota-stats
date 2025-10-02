import { useParams, useLocation, Link } from 'react-router-dom';
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react"
import { Input } from "./ui/input";
import { useId } from "react"
import { Search } from "lucide-react";

export default function Navbar() {
  const { name } = useParams();
  const location = useLocation();

  return (
    <nav className="bg-zinc-950 border-b border-slate-500 text-white">
      <div className="h-16 items-center flex justify-between px-4 max-w-6xl mx-auto">
      <div className="">  </div>
      {/* Middle area */}

    <div className="relative mx-auto w-full max-w-xs">
      <Input
        className="peer border-b border-slate-300 h-8 ps-8 pe-10"
        placeholder="SteamID..."
        type="search" />
      <div
        className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
        <SearchIcon size={16} />
      </div>
      
    </div>

      </div>
    </nav>
  );
}