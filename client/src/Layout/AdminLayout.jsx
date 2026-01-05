import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
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

import Header from '@/features/layout/admin/Header'
import Sidebar from '../features/layout/admin/Sidebar';
const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // 导航菜单配置
  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Categories', path: '/admin/categories', icon: <Tag size={20} /> },
    { name: 'Products', path: '/admin/products', icon: <Package size={20} /> },
  ];
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* 移动端侧边栏遮罩 */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* 侧边栏 Sidebar */}
      <Sidebar menuItems = {menuItems} isSidebarOpen={isSidebarOpen}/>
      

      {/* 右侧主体内容 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 顶部栏 Navbar */}
        <Header menuItems = {menuItems}/>
        

        {/* 页面内容区 Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="container mx-auto">
            {/* 所有的子页面路由将在这里渲染 */}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;