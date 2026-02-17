import { useState } from "react";

function useSortControls(stocks){
    const [sortBy,setSortBy]=useState('');
    const [order,setOrder]=useState("asc");
    const getSortedStocks=()=>{
        const sortedStocks=[...stocks];
        if(sortBy==='Date'){
            return sortedStocks.sort((a,b)=> a.Date.localeCompare(b.Date));
        }
        if(sortBy){
            return sortedStocks.sort((a,b)=>
                order==="asc" ?
                a[sortBy]-b[sortBy]
                : b[sortBy]-a[sortBy]
            );
        }
        return sortedStocks;
    }
    return{
        sortBy,
        order,
        setSortBy,
        setOrder,
        displayList : getSortedStocks()
    };
}
export default useSortControls;