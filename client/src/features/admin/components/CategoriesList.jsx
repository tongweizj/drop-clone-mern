import React from 'react';
import { Link } from 'react-router-dom';
export const CategoriesList = ({ categories }) => {
    return (
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            {/* 表头 */}
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Image</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Slug</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Description</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Tools</th>
                </tr>
            </thead>
            {/* 表身 */}
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {/* 行 1 */}
                {categories.map((item) => (
                    <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">{item._id}</td>
                        <td className="px-6 py-4">
                            {item.name}
                        </td>
                        <td className="px-6 py-4">{item.description}</td>
                        <td className="px-6 py-4">{item.description}</td>
                        <td className="px-6 py-4">
                            <div className="flex justify-start gap-4">
                                <Link className="text-blue-600 hover:text-blue-900 font-medium" to={`/category/${item._id}`} target="_blank">
                                    浏览
                                </Link>
                                <Link className="text-blue-600 hover:text-blue-900 font-medium" to={`/admin/categories/${item._id}`} >
                                    编辑
                                </Link>
                                <Link className="text-blue-600 hover:text-blue-900 font-medium" to={`/categories/${item._id}`} target="_blank">
                                    删除
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};