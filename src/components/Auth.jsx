import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, TextField, Button, Typography } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
function Auth({onLogin}){
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    const navigate=useNavigate();
    const [isLogin,setIsLogin]=useState(false);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!email || !password){
            alert("Email and password required");
            return;
        }
        if(!isLogin && !name){
            alert("Name required for signup");
            return;
        }
        if(!emailRegex.test(email)){
            alert("Invalid email format");
            return;
        }
        if(!passwordRegex.test(password)){
            alert("Password must contain 1 uppercase and 1 number");
            return;
        }
        onLogin({name,email});
        navigate("/dashboard");
    };
    const toggleMode=()=>{
        setIsLogin(!isLogin);
    };
    return(
        <Card style={{width:350,margin:"80px auto",padding:"20px"}}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {isLogin ? "Login" : "Signup"}
                </Typography>
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <TextField 
                        label="Name"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        />
                    )}
                    <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    style={{marginTop: "15px"}}
                    >
                        {isLogin ? "Login" : "Signup"}
                    </Button>
                </form>
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <GoogleLogin
                    onSuccess={(credentialResponse) => {
                    const decoded = jwtDecode(credentialResponse.credential);

                    onLogin({
                        name: decoded.name,
                        email: decoded.email,
                    });

                    navigate("/dashboard");
                    }}
                    onError={() => {
                    console.log("Google Login Failed");
                    }}
                />
                </div>
                <Button
                onClick={toggleMode}
                fullWidth
                style={{marginTop:"10px"}}
                >
                    {isLogin ? "Switch to Signup" : "Switch to Login"}
                </Button>
            </CardContent>
        </Card>
    );
}
export default Auth;