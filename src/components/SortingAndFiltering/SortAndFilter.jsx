import StockCard from "../StockCard";
import useSortControls from "./useSortControls";

function SortAndFilter({stocks}){
    const {sortBy,order,setSortBy,setOrder,displayList}=useSortControls(stocks);
    return(
        <div style={{padding:"20px"}}>
            <h1 style={{textAlign:"center",marginBottom:"30px"}}>Stocks Catalog</h1>
            <div
            style={{
                marginBottom: "30px",
                padding: "15px",
                background: "#f9f9f9",
                borderRadius: "8px",
                border: "1px solid #eee",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
            }}      
            >
                <label style={{ fontWeight: "bold" }}>Sort By:</label>
                <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}
                    style={{
                    padding: "8px 12px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    cursor: "pointer",
                    fontSize: "14px",
                }}>
                    <option value="">Select Sort Attribute</option>
                    {["Date", "Open", "High", "Low", "Close", "AdjClose", "Volume"].map((key)=>(
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
                <select value={order} onChange={(e)=>setOrder(e.target.value)}
                    style={{
                    padding: "8px 12px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    cursor: "pointer",
                    fontSize: "14px",
                }}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
                <span
                    style={{
                    fontSize: "12px",
                    color: "#666",
                    marginLeft: "auto",
                }}> Showing {displayList.length} stocks</span>
            </div>
            <div
                style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "20px",
            }}>
                {displayList.map((stock)=>(
                    <StockCard key={stock.Date} stock={stock}/>
                ))}
            </div>
        </div>
    );
}
export default SortAndFilter;