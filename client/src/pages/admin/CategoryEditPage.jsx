import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCategory } from "@/features/Category/hooks/useCategory";
import { useCategoryDetail } from "@/features/Category/hooks/useCategoryDetail";
import { FormField } from "@/features/admin/components/FormField";

const CategoryEditPage = ({ }) => {
    const { categoryId } = useParams();
    console.log("categoryId:", categoryId)
    const navigate = useNavigate(); // 初始化 navigate
    const { category, loading, handleChange, updateCategory } = useCategoryDetail(categoryId);
    console.log("category:", category)
    const handleSubmit = async (e) => {
        e.preventDefault();

        // 执行更新
        const result = await updateCategory(categoryId);

        // 如果返回结果没有错误，则跳转
        // 假设成功时返回的对象不包含 error 属性
        if (result && !result.error) {
            // 跳转回分类列表页面，例如 "/admin/categories"
            // 使用 { replace: true } 可以防止用户点“返回”键又回到编辑页
            navigate("/admin/categories", { replace: true });
        }
    };
    if (loading || !category) return <div>加载中...</div>;
    const inputClass = "w-full px-4 py-3  text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none resize-y"

    return (
        <>
            <div className="mx-auto max-w-7xl py-6">
                <div className='grid grid-row gap-6'>
                    <form onSubmit={handleSubmit
                        
                    }>
                        <FormField label="Name">
                            <textarea
                                className={inputClass}
                                value={category?.name}
                                onChange={handleChange("name")} />
                        </FormField>
                        <FormField label="Description">
                            <textarea className={inputClass} value={category?.description} onChange={handleChange("description")} />
                        </FormField>
                        <button
                            disabled={loading}
                            className={`w-full py-3 rounded-lg font-bold text-white transition ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                        >
                            {loading ? "Updating..." : "Save Changes"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default CategoryEditPage