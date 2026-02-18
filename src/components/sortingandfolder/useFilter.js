import { useState } from "react";

function useFilter(products){
    const [showInStockOnly,setShowInStockOnly]=useState(true);
    const [selectedCategory,setSelectedCategory]=useState('all');
    //get unique categories from products
    const categories=['all',...new Set(products.map(p=>p.category))];
    const filteredProducts=products.filter(product=>{
        const matchesCategory=selectedCategory==='all'||product.category===selectedCategory;
        const matchesStock=showInStockOnly? product.inStock===true:true;
        return matchesCategory&&matchesStock;
    })
    return {
        selectedCategory,
        setSelectedCategory,
        showInStockOnly,
        setShowInStockOnly,
        categories,
        filteredProducts
    }
}
export default useFilter;