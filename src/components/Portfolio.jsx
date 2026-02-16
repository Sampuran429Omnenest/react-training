// import {useLocation} from "react-router-dom"
function Portfolio({name,age,course,onBack}){
    // const location=useLocation();
    // const studentData=location.state;
    return(
        <div>
            <h3>this is the portfolio component</h3>
            <div>
                <p>name is {name}</p>
                <p>age is {age}</p>
                <p>course is {course}</p>
                <p>onBack is {}</p>
                <button onClick={onBack}>click me to go back</button>
            </div>
            {/* {studentData ? (
                <div>
                    <p>Name: {studentData.name}</p>
                    <p>Age: {studentData.age}</p>
                    <p>Course: {studentData.course}</p>
                </div>
            ) : (
                <p>No student data received.</p>
            )} */}
        </div>
    );
}
export default Portfolio 