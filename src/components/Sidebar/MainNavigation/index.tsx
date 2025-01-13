import {
  BarChart,
  CheckSquare,
  ChevronDown,
  Flag,
  Home,
  SquareStack,
  Users,
} from "lucide-react"
import { NavItem } from "./nav-item"

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart} />
      <NavItem title="Projects" icon={SquareStack} />
      <NavItem title="Tasks" icon={CheckSquare} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={Users} />
    </nav>
  )
}
