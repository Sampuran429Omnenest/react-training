function StockCard({stock}){
    if(!stock) return null;
    const {Date,Open,High,Low,Close,Volume}=stock;
    const priceChange=Close-Open;
    return (
      <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      margin: "10px 0"
    }}>
      <h4>{Date}</h4>

      <p>Open: ₹{Open}</p>
      <p>Close: ₹{Close}</p>
      <p>High: ₹{High}</p>
      <p>Low: ₹{Low}</p>

      <p style={{
        color: priceChange >= 0 ? "green" : "red",
        fontWeight: "bold"
      }}>
        Change: {priceChange.toFixed(2)}
      </p>

      <p>Volume: {Volume.toLocaleString()}</p>
    </div>
    );
}
export default StockCard;