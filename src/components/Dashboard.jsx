import Footer from "./Footer";
import Header from "./Header";
import { products } from '../utils/Product';
import SortAndFilter from "./sortingandfolder/SortAndFilter";
function Dashboard({ onLogout }) {
    const student = {
        name: "sam",
        age: 20,
        course: "react"
    }

    return (
        <div>
            <h3>this is the dashboard</h3>
            <Header />
            <div>
                <p>name is {student.name}</p>
                <p>age is {student.age}</p>
                <p>course is {student.course}</p>
            </div>
            <div>
                <button onClick={onLogout}>click me </button>
            </div>
            <h2 style={{ marginTop: '30px' }}>Our Products</h2>
             <SortAndFilter products={products} />

            <Footer />
        </div>
    );
}

export default Dashboard;