import { Link } from "react-router-dom";
import { useCategory } from "@/features/Category/hooks/useCategory";
import PageTitle from "@/components/PageTitle";
import {CategoriesList} from "@/features/admin/components/CategoriesList"

export default function CategoryListPage() {
  const { categories, loading } = useCategory();
  return (
    <>
      <PageTitle title="Category List" channel="DropClone Admin" />
      <div className="w-full space-y-4">
        {loading ? (
          <div className="flex justify-center py-10">加载中...</div> // 后续换成 Spinner
        ) : categories.length > 0 ? (
          < CategoriesList  categories={categories} />
        ) : (
          <p className="text-center text-gray-500 mt-10 text-lg">
            hi,CategoryList.
          </p>
        )}
      </div>
    </>
  );
}
