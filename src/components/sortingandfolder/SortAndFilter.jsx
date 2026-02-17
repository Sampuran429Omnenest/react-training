import React from "react";
import ProductCard from "../ProductCard";
import useSortControls from "./useSortControls";
function SortAndFilter({ products }) {
  const {sortBy,setSortBy,displayList}=useSortControls(products);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        E-commerce Product Catalog
      </h1>
      
      <div style={{ 
        marginBottom: '30px',
        padding: '15px',
        background: '#f9f9f9',
        borderRadius: '8px',
        border: '1px solid #eee',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <label style={{ fontWeight: 'bold' }}>Sort By:</label>
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            padding: '8px 12px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          <option value="default">Default (Featured)</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="name-az">Name: A to Z</option>
          <option value="rating">Rating: High to Low</option>
        </select>
        
        <span style={{ fontSize: '12px', color: '#666', marginLeft: 'auto' }}>
          Showing {displayList.length} items
        </span>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '25px'
      }}>
        {displayList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default SortAndFilter;