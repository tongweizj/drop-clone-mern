import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Layouts
const MainLayout = lazy(() => import('@/Layout/MainLayout'));
const AuthLayout = lazy(() => import('@/Layout/AuthLayout'));
const AdminLayout = lazy(() => import('@/Layout/AdminLayout'))

const Home = lazy(() => import('@/pages/Home'));
const Signup = lazy(() => import('@/pages/auth/Signup'));
const Login = lazy(() => import('@/pages/auth/Signin'));
const Profile = lazy(() => import('@/pages/Profile'));

const Category = lazy(() => import('@/pages/Category'));
const Product = lazy(() => import('@/pages/Product'));
const Favorites = lazy(() => import('@/pages/Favorites'));
const Cart = lazy(() => import('@/pages/Cart'));
const NotFound = lazy(() => import('@/pages/static/404'));
const About = lazy(() => import('@/pages/static/About'));
const Contact = lazy(() => import('@/pages/static/Contact'));
const Privacy = lazy(() => import('@/pages/static/Privacy'));
const Services = lazy(() => import('@/pages/static/Services'));
const FAQ = lazy(() => import('@/pages/static/Faq'));
const HelpCenter = lazy(() => import('@/pages/static/Help'));

const Dashboard = lazy(() => import('@/pages/admin/Dashboard'));
const CategoryList = lazy(() => import('@/pages/admin/CategoryList'));
const ProductListPage = lazy(() => import('@/pages/admin/ProductListPage'));
const ProductEditPage = lazy(() => import('@/pages/admin/ProductEditPage'));

const AppRouter = () => {
    return (
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />

                    <Route path="/user/profile" element={<Profile />} />
                    <Route path="/user/favorites" element={<Favorites />} />
                    <Route path="/user/cart" element={<Cart />} />
                    <Route path="/category/:categoryId" element={<Category />} />
                    <Route path="/product/:productId" element={<Product />} />
                

                    {/* Static pages */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/help" element={<HelpCenter />} />\

                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route element={<AuthLayout />}>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Route>

                {/* 后台路由 */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="categories" element={<CategoryList />} />
                    <Route path="products" element={<ProductListPage />} />
                    <Route path="products/:productId" element={<ProductEditPage />} />
                    <Route path="products/create" element={<ProductEditPage />} />
                </Route>



            </Routes>
        </Suspense>
    );
};

export default AppRouter;
