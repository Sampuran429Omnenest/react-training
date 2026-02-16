// import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
// import { useNavigate } from "react-router-dom";
// import Portfolio from "./Portfolio";
import { Card, CardContent, Button, Typography } from "@mui/material";
import Portfolio from "./Portfolio";
function Dashboard({user,onLogout}){
    // const [showPortfolio,setShowPortfolio]=useState(false);
    // const student={
    //     name:"sam",
    //     age:20,
    //     course:"react"
    // }
    //const navigate=useNavigate();
    const stockData = [
        { symbol: "AAPL", name: "Apple Inc.", price: 192.45, change: +1.25, volume: "74M" },
        { symbol: "MSFT", name: "Microsoft Corp.", price: 410.32, change: -2.15, volume: "22M" },
        { symbol: "GOOGL", name: "Alphabet Inc.", price: 138.67, change: +0.85, volume: "18M" },
        { symbol: "AMZN", name: "Amazon.com Inc.", price: 174.90, change: -1.05, volume: "35M" },
        { symbol: "TSLA", name: "Tesla Inc.", price: 245.12, change: +3.40, volume: "52M" },
        { symbol: "NVDA", name: "NVIDIA Corp.", price: 720.55, change: +5.75, volume: "41M" },
        { symbol: "META", name: "Meta Platforms", price: 498.80, change: -0.95, volume: "27M" },
        { symbol: "NFLX", name: "Netflix Inc.", price: 610.25, change: +2.10, volume: "9M" },
        { symbol: "BABA", name: "Alibaba Group", price: 88.45, change: -1.20, volume: "15M" },
        { symbol: "AMD", name: "Advanced Micro Devices", price: 168.30, change: +4.50, volume: "33M" },
        { symbol: "INTC", name: "Intel Corp.", price: 42.75, change: -0.40, volume: "29M" },
        { symbol: "ORCL", name: "Oracle Corp.", price: 120.15, change: +1.90, volume: "12M" },
    ];
    return(
        <Card style={{ width: 400, margin: "50px auto", padding: "20px" }}>
            <CardContent>
                <Typography variant="h6">Dashboard</Typography>
                <Typography>Name: {user?.name}</Typography>
                <Typography>Email: {user?.email}</Typography>
                <Portfolio stocks={stockData}/>
            <Button
                variant="contained"
                style={{ marginTop: "15px" }}
                onClick={onLogout}
            >
                Logout
            </Button>
            </CardContent>
        </Card>
    );
    
}
export default Dashboard