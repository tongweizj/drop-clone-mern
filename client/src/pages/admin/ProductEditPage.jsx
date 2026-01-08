import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from '@/context/AuthContext.jsx';
import { useProductEdit } from "@/features/admin/hooks/useProductEdit";
import { FormField } from "@/features/admin/components/FormField";
import { ImageSection } from "@/features/admin/components/ImageSection";

const ProductEditPage = () => {
  const { productId } = useParams();
  console.log("productId:", productId)
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  console.log("isAuthenticated?.user?._id:", isAuthenticated?.user)
  const { product, categories, loading, status, handleChange, onSubmit, setStatus } =
    useProductEdit(productId, isAuthenticated, navigate);
  const inputClass = "w-full px-4 py-3  text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none resize-y"
  const inputHighClass = "min-h-[80px]"
  if (!isAuthenticated) {
    return <p>Please log in to view your cart.</p>;
  }
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl my-10 border border-gray-100">
      <h1 className="text-2xl font-bold mb-8">Edit Listing</h1>
      <form onSubmit={onSubmit}>
        <ImageSection
          currentImage={product.images[0]}
          onFileChange={handleChange("imageFile")}
        />
        <div className="grid grid-row gap-6">
          <FormField label="Title">
            <textarea className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none resize-y min-h-[80px]" value={product.title} onChange={handleChange("title")} />
          </FormField>

          <FormField label="Price ($)">
            <input
              type="number"
              className={inputClass}
              value={product.price}
              onChange={handleChange("price")} />
          </FormField>
        </div>

        <FormField label="Description">
          <textarea
            className={inputClass}
            rows={20}
            value={product.description}
            onChange={handleChange("description")} />
        </FormField>

        <FormField label="Address">
          <input
            className={inputClass}
            value={product.location.address}
            onChange={handleChange("address")}
            required
          />
        </FormField>
        <FormField label="City">
          <input
            className={inputClass}
            value={product.location.city}
            onChange={handleChange("City")}
            required
          />
        </FormField>
        <FormField label="Province">
          <input
            className={inputClass}
            value={product.location.province}
            onChange={handleChange("province")}
            required
          />
        </FormField>
        <FormField label="Postal Code">
          <input
            className={inputClass}
            value={product.location.postalCode}
            onChange={handleChange("postalCode")}
            required
          />
        </FormField>
        <FormField label="Condition">
          <input
            className={inputClass}
            value={product.condition}
            onChange={handleChange("condition")}
            required
          />

        </FormField>
        <button
          disabled={loading}
          className={`w-full py-3 rounded-lg font-bold text-white transition ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {loading ? "Updating..." : "Save Changes"}
        </button>
      </form>
      {/* 错误提示根据 status 展示 */}
    </div>
  );
};

export default ProductEditPage;