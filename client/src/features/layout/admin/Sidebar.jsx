import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Tag, 
  Package, 
  ShoppingCart, 
  Menu, 
  X, 
  LogOut,
  User
} from 'lucide-react';
const Sidebar = ({menuItems, isSidebarOpen}) => {
    return (
        <>
        <aside className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 text-white transition-transform duration-300 transform 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:static lg:inset-0
      `}>
        <div className="flex items-center justify-center h-16 bg-slate-950">
          <span className="text-xl font-bold tracking-wider">Admin</span>
        </div>

        <nav className="mt-4 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center px-4 py-3 rounded-lg transition-colors
                ${location.pathname === item.path 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:bg-slate-800 hover:text-white'}
              `}
              onClick={() => setSidebarOpen(false)}
            >
              {item.icon}
              <span className="mx-4 font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-slate-800">
          <button className="flex items-center text-gray-400 hover:text-red-400 transition-colors">
            <LogOut size={20} />
            <span className="mx-4">Logout</span>
          </button>
        </div>
      </aside>
        </>)
}
export default Sidebar;