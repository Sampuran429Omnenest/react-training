import { Card, CardContent, Button, Typography } from "@mui/material";

// import {useLocation} from "react-router-dom"
function Portfolio({stocks}){
    return(
        <div>
            {stocks.map((stock,idx)=>(
                <Card
                key={idx}
                style={{ width: 400, margin: "15px auto", padding: "15px" }}
                >
                <CardContent>
                    <Typography variant="h6">
                        {stock.symbol}-{stock.name}
                    </Typography>
                    <Typography>Price: ${stock.price}</Typography>
                    <Typography>
                        Change: 
                        <span style={{ color: stock.change >= 0 ? "green" : "red" }}>
                        {" "}
                        {stock.change}
                        </span>
                    </Typography>
                    <Typography>Volume: {stock.volume}</Typography>
                </CardContent>
                </Card>
            ))}
        </div>
    );
}
export default Portfolio 