import { useState, useEffect, useCallback } from "react";

import { list } from "/src/services/api-category.js";

export const useCategory = () => {
    // 存放从服务器拿到的产品数据
    const [categories, setCategories] = useState(null);

    // 一个“开关”，用来记录数据是否正在加载中，好让 UI 显示“加载中...”提示。
    const [loading, setLoading] = useState(true);

    const fetchCategory = useCallback(async () => {
        setLoading(true);
        try {
            const response = await list();
            if (!response?.error) setCategories(response);
            console.log("fetchCategories response", response)
        } catch (err) {
            if (err.name !== "AbortError") console.error(err);
        } finally {
            setLoading(false);
        }
    }, []);

    // 2. 新增：根据 ID 获取单个分类的方法
    const getCategoryById = useCallback(async (id) => {
        setLoading(true);
        try {
            // 优先从现有的 categories 状态中找（可选，为了性能）
            if (categories) {
                const found = categories.find(item => item._id === id);
                if (found) return found;
            }

            // 如果本地没找到，或者需要获取最新详情，则请求 API
            const response = await read(id);
            return response;
        } catch (err) {
            console.error("获取单个分类失败:", err);
            return null;
        } finally {
            setLoading(false);
        }
    }, [categories]);

    useEffect(() => {
        const controller = new AbortController();
        fetchCategory(controller.signal);
        return () => controller.abort();
    }, [fetchCategory]);


    return { categories, setLoading, loading, getCategoryById }
}