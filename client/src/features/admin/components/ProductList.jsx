import React from 'react';
import ProductCard from "./ProductCard";

/**
 * ProductList 展示组件
 * @param {Array} items - 商品列表数据
 */
export const ProductList = ({ items }) => {
  return (      
      <div className="grid grid-cols-1 gap-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="flex justify-center transition-transform duration-300 hover:-translate-y-1"
          >
            <ProductCard item={item} />
          </div>
        ))}
      </div>

    
  );
};