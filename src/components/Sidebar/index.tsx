import { Cog, LifeBuoy, Search } from "lucide-react"
import { Logo } from "./Logo"
import { NavItem } from "./nav-item"
import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from "lucide-react"
import { UsedSpaceWidget } from "./used-space-widget"

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8 dark:border-zinc-600">
      <Logo />

      <div className="mx-1 flex w-full items-center gap-3 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm dark:border-zinc-600">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 dark:text-zinc-100 dark:placeholder-zinc-300"
        />
      </div>

      <nav className="space-y-0.5">
        <NavItem title="home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
      </div>

      <UsedSpaceWidget />
    </aside>
  )
}
