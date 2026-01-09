import { useState, useEffect } from "react";
import { read, update, create } from "/src/services/api-listing.js";
import { list } from "/src/services/api-category.js";
import { useAuth } from '/src/context/AuthContext.jsx';

export const useProductEdit = (productId, navigate) => {
  const { isAuthenticated } = useAuth();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    images: [],
    imageFile: null,
    location: { address: "", city: "", province: "", postalCode: "" },
    condition: "",
    status: "Active"
  });

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ error: "", success: false });

  // 初始化数据
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await list();
        setCategories(response);
        console.log("fetchCategories response", response)
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!productId) return;
    read(productId).then(data => {
      if (!data.error) setProduct(prev => ({ ...prev, ...data }));
    });
  }, [productId]);

  const handleChange = (name) => (event) => {
    console.log("handleChange product:", product)
    const value = name === "imageFile" ? event.target.files[0] : event.target.value;
    if (["address", "city", "province", "postalCode"].includes(name)) {
      setProduct(prev => ({
        ...prev,
        location: { ...prev.location, [name]: value }
      }));
    } else {
      setProduct(prev => ({ ...prev, [name]: value }));
    }
  };

  const onSubmit = async (e) => {
    console.log("--- 准备提交 ---");
    console.log("当前接收到的 productId 参数:", productId);
    console.log("productId 的类型:", typeof productId);
    e.preventDefault();
    setLoading(true);

    event.preventDefault();
    setStatus("");

    if (!isAuthenticated) {
      setStatus("User not authenticated.");
      return;
    }
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.category ||
      !product.condition ||
      !product.location.address ||
      !product.location.city ||
      !product.location.province ||
      !product.location.postalCode
    ) {
      setStatus("Please fill in all required fields before submitting the product.");
      console.log("Please fill in all required fields before submitting the product.:", product)
      return;
    }

    const { user, token } = isAuthenticated;
    let listingToSend;
    if (product.imageFile) {
      const formData = new FormData();
      formData.append("image", product.imageFile);
      formData.append("title", product.title);
      formData.append("description", product.description);
      formData.append("price", product.price);
      formData.append("category", product.category);
      formData.append("condition", product.condition);
      formData.append("status", product.status);
      formData.append("postedBy", user._id);
      formData.append("location[address]", product.location.address);
      formData.append("location[city]", product.location.city);
      formData.append("location[province]", product.location.province);
      formData.append("location[postalCode]", product.location.postalCode);
      listingToSend = formData;
    } else {
      listingToSend = {
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category,
        condition: product.condition,
        status: product.status,
        postedBy: user._id,
        location: {
          address: product.location.address,
          city: product.location.city,
          province: product.location.province,
          postalCode: product.location.postalCode,
        },
      };
      console.log("listingToSend:", listingToSend)
    }
    try {
      console.log("test productId:", productId)
      let data;
      if (productId == null) {
        console.log("FormData object:", listingToSend);
        data = await create(listingToSend);
      } else {
        data = await update({ productId }, { t: token }, listingToSend);
      }

      if (data.error) {
        setStatus({ error: data.error, success: false });
      } else {
        setStatus({ error: "", success: true });
      }
      setTimeout(() => {
        navigate("/admin/products");
      }, 1000);
    } catch (err) {
      console.error("UPDATE error:", err);
      setStatus({ error: "An error occurred while updating the listing.", success: false });
    }
    setLoading(false);

  };

  return { product, categories, loading, status, handleChange, onSubmit, setStatus };
};