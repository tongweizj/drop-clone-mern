import { useCategory } from "@/features/Category/hooks/useCategory";
import { useState, useEffect, useCallback } from "react";
import { update } from "/src/services/api-category.js";


export const useCategoryDetail = (id) => {
    const [category, setCategory] = useState(null);
    const { getCategoryById, setLoading, loading } = useCategory(); // 复用之前的逻辑
    useEffect(() => {
        let isMounted = true;
        const load = async () => {
            const data = await getCategoryById(id);
            if (isMounted) setCategory(data);
        };
        if (id) load();
        return () => { isMounted = false; };
    }, [id, getCategoryById]);


    const handleChange = (name) => (event) => {
        const value = event.target.value;
        console.log("handleChange Category:", value)
        setCategory(prev => ({ ...prev, [name]: value }));
    };


    const updateCategory = useCallback(async (id) => {
        if (!category) return;
        // 1. 快速检查：确保 data 中每一个字段都有值
        // Object.values(data) 获取对象所有属性值
        // .every(value => ...) 检查是否所有值都符合条件
        console.log("updateCategory category:", category)
        const fieldsToValidate = ['name', 'description'];
        const isValid = fieldsToValidate.every(field => {
            const val = category[field];
            return val && val.toString().trim() !== '';
        });


        if (!isValid) {
            console.error("校验失败：存在空字段");
            alert("请填写所有必填字段");
            return { error: "Missing fields" };
        }

        // 2. 校验通过，走更新逻辑
        setLoading(true);
        try {
            // 假设你的 api-category.js 里有 update 方法
            const response = await update({ categoryId: id }, category);

            // 3. 更新成功后，建议刷新一下本地的 categories 列表
            // fetchCategory(); 

            return response;
        } catch (err) {
            console.error("更新失败", err);
            return { error: err.message };
        } finally {
            setLoading(false);
        }
    }, [category, setLoading]);


    return { category, loading, handleChange, updateCategory };
};