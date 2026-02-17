function ProductCard({ product }) {
  // Destructuring the product object
   if (!product) return null;
  const { name, category, price, rating, inStock } = product;

  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '15px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      {/* Category & Rating */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#888' }}>
        <span>{category}</span>
        <span>⭐ {rating}</span>
      </div>

      {/* Name & Price */}
      <h3 style={{ margin: '5px 0', fontSize: '16px' }}>{name}</h3>
      <div style={{ fontWeight: 'bold', fontSize: '18px' }}>₹{price}</div>

      {/* Stock Status */}
      <p style={{ 
        fontSize: '12px', 
        color: inStock ? 'green' : 'red',
        margin: '5px 0' 
      }}>
        {inStock ? '● In Stock' : '○ Out of Stock'}
      </p>

      {/* Action Button */}
      <button 
        disabled={!inStock}
        style={{
          marginTop: 'auto',
          padding: '8px',
          cursor: inStock ? 'pointer' : 'not-allowed',
          backgroundColor: inStock ? '#000' : '#ccc',
          color: '#fff',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        {inStock ? 'Add to Cart' : 'Unavailable'}
      </button>
    </div>
  );
}

export default ProductCard;