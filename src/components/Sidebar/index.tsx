import { Search } from "lucide-react";
import { Logo } from "./Logo";

export function Sidebar() {
  return (
    <aside className="gap-2 space-y-6 border-r border-zinc-200 px-5 py-8 dark:border-zinc-600">
      <Logo />

      <div className="flex w-full items-center gap-3 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
        />
      </div>
    </aside>
  );
}
