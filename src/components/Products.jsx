import { products } from '../utils/Product';
import ProductCard from './ProductCard';
function Product() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>E-commerce Product Catalog</h1>
      
      {/* Product Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Product;