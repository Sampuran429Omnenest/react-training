import React from "react";
import ProductCard from "../ProductCard";
import useSortControls from "./useSortControls";
import useFilter from "./useFilter";
function SortAndFilter({ products }) {
  const {categories,selectedCategory,setSelectedCategory,showInStockOnly,setShowInStockOnly,filteredProducts}=useFilter(products);

  const {sortBy,setSortBy,displayList}=useSortControls(filteredProducts);
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        E-commerce Product Catalog
      </h1>
      <div style={{
        marginTop: '20px',
        marginBottom: '20px',
        padding: '15px',
        background: '#f5f5f5',
        borderRadius: '4px'
      }}>
        <label style={{
          display: 'block',
          marginBottom: '10px',
          fontWeight: 'bold' 
        }}>
          Filter By Category
        </label>
        <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          {categories.map((category)=>(
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '8px 16px',
                border: '2px solid #0066cc',
                borderRadius: '20px',
                background: selectedCategory === category 
                  ? '#0066cc' 
                  : 'white',
                color: selectedCategory === category 
                  ? 'white' 
                  : '#0066cc',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div style={{ marginBottom: '20px', paddingLeft: '15px' }}>
          <label style={{ cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox"
            checked={showInStockOnly}
            onChange={(e)=>setShowInStockOnly(e.target.checked)}
            />
            Only show Items in Stock
          </label>
        </div>
      </div>
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