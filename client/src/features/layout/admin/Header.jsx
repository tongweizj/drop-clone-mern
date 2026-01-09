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
const Header = ({ menuItems }) => {
    return (
        <><header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
            <div className="flex items-center">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="text-gray-500 focus:outline-none lg:hidden"
                >
                    <Menu size={24} />
                </button>
                <h1 className="ml-4 text-xl font-semibold text-gray-800 lg:ml-0">
                    {menuItems.find(i => i.path === location.pathname)?.name || '管理后台'}
                </h1>
                {location.pathname === '/admin/products' && (
                    <div className='ml-10'>
                        <Link className='inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-indigo-700' to={`/admin/products/create`} >
                        创建商品
                    </Link>
                    </div>
                    
                )}
            </div>

            <div className="flex items-center space-x-4">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-gray-700">Name</p>
                    <p className="text-xs text-gray-500">SuperAdmin</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <User size={24} />
                </div>
            </div>
        </header>
        </>)
}
export default Header;