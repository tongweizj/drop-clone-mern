import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from '@/context/AuthContext.jsx';
import { useProductEdit } from "@/features/admin/hooks/useProductEdit";
import { FormField } from "@/features/admin/components/FormField";
import { ImageSection } from "@/features/admin/components/ImageSection";

const ProductEditPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { product, categories, loading, status, handleChange, onSubmit, setStatus } =
    useProductEdit(productId, navigate);
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
          <FormField label="Category">
            <select
              id="category-select"
              value={product.category}
              onChange={handleChange("category")}
              required
              className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm appearance-none"
            >
              <option value="">
                Select a category
              </option>

              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
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
            onChange={handleChange("city")}
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
          
          <select
            value={product.condition}
            onChange={handleChange("condition")}
            required
            className="block w-full px-3 py-2 pr-10 bg-white border border-gray-300 rounded-md shadow-sm 
                 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                 text-sm text-gray-900 transition-all cursor-pointer"
          >
            {/* 默认选项 */}
            <option value="" disabled className="text-gray-400">
              Select Condition
            </option>

            {/* 静态 MenuItem 选项 */}
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>

          {/* 下拉箭头图标：使用 pointer-events-none 确保点击图标也能触发下拉 */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 group-hover:text-gray-600">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
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