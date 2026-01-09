import { Link } from "react-router-dom";
import PageTitle from "@/components/PageTitle";
import { ProductList } from "@/features/admin/components/ProductList";
import { useProductList } from "@/features/products/hooks/useProductList";
import { useAuth } from '@/context/AuthContext.jsx';
export default function ProductListPage() {
  const { filteredListings, loading } = useProductList("");
  const { isAuthenticated } = useAuth();
   console.log("isAuthenticated?.user?._id:", isAuthenticated?.user)
  return (
    <>
      <PageTitle title="Product List" channel="DropClone Admin" />

      <div className="w-full space-y-4">
        {loading ? (
          <div className="flex justify-center py-10">加载中...</div> // 后续换成 Spinner
        ) : filteredListings.length > 0 ? (
          <ProductList items={filteredListings} />
        ) : (
          <p className="text-center text-gray-500 mt-10 text-lg">
            No listings match your search criteria.
          </p>
        )}
      </div>
    </>
  );
}