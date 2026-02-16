import { useState } from "react";

function Auth({onLogin}){
    const [isLogin,setIsLogin]=useState(false);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(isLogin){
            console.log('Login',{email,password});
        }else{
            console.log('Signup',{name,email,password});
        }
        onLogin();
    };
    const toggleMode=()=>{
        setIsLogin(!isLogin);
    };
    return(
        <div>
        <h1>{isLogin ? 'Login' : 'Signup'}</h1>
        <form onSubmit={handleSubmit}>
            {!isLogin && (
                <div>
                    <label>Name</label>
                    <input
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required/>
                </div>
            )}    
            <div>
                <label>Email</label>
                <input type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required/>
            </div>
            <div>
                <label>Password</label>
                <input type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required/>
            </div>
            <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
        </form>
        <p>
            {isLogin? "Dont have an account":"Already have an account"}
            <button onClick={toggleMode}>{isLogin ? 'Signup' : 'Login'}</button>
        </p>
        </div>
    );
}
export default Auth;