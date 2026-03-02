import { NavLink } from 'react-router-dom'

const navItems = [
    { path: '/', name: 'Dashboard', icon: 'fa-home' },
    { path: '/players', name: 'Players', icon: 'fa-folder' },
    { path: '/matches', name: 'Matches', icon: 'fa-folder' },
    { path: '/statistics', name: 'Statistics', icon: 'fa-folder' }
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-slate-800 border-r border-slate-700 p-4">
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
          <i className="fa-solid fa-cube text-white"></i>
        </div>
        <span className="font-bold text-lg">MVP App</span>
      </div>

      <nav className="space-y-1">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:bg-slate-700 hover:text-white'
              }`
            }
          >
            <i className={`fa-solid ${item.icon}`}></i>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
