// import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
// import { useNavigate } from "react-router-dom";
import Portfolio from "./Portfolio";
function Dashboard({onLogout}){
    // const [showPortfolio,setShowPortfolio]=useState(false);
    const student={
        name:"sam",
        age:20,
        course:"react"
    }
    //const navigate=useNavigate();
    return(
        <div>
            <h3>this is the dashboard</h3>
            <Header/>
            <div>
                <p>name is {student.name}</p>
                <p>age is {student.age}</p>
                <p>course is {student.course}</p>
            </div>
            <div>
                <button onClick={onLogout}>click me </button>
            </div>
            <Footer/>
        </div>
    );
    
}
export default Dashboard