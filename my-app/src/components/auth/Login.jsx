import { useState, useEffect } from "react";
import { useAuth } from "../../store/data/AuthContext";
import { useNavigate } from "react-router-dom";
import { CheckAccount } from "../../services/CheckAccount";

function Login() {
  const { login, token,setToken,user,setUser } = useAuth();
  const navigate = useNavigate();
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setform({ ...form, [name]: value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setform((form) => ({
      ...form,
      email: "testGameCart@gmail.com",
      password: "test123",
    }));

    
    const isAccountPresent = CheckAccount(token);
    if (isAccountPresent) {
      navigate("/products");
    }
  };

  useEffect(() => {
    login(form.email, form.password);
  }, [form.email, form.password]);

  return (
    <div>
      <div class="form-container">
        <h1 class="text-center">LOGIN</h1>
        <form class="form">
            <label htmlFor="" class="input-label">
                Email address:
                <input type="email" placeholder="Enter your email here" class="input" value={form.email} name="email" onChange={handleChange}/>
            </label>
            <label htmlFor="" class="input-label">
                Password:
                <input type="password" placeholder="*************" class="input" value={form.password} name="password" onChange={handleChange}/>
            </label>
            <label htmlFor="" class="input-label-row">
                <input type="checkbox" class="checkbox-input"/>
                <span class="inputs-title">Remember me</span>
                <span class="login-forgot-link"><a href="" >Forgot your Password?</a></span>
            </label>
            <label htmlFor="" class="input-label text-center">
                <button type='submit' href="" onClick={(e)=>loginHandler(e)} class="btn-link formBtn">Join with Test Credentials</button>
            </label>
            <label htmlFor="" class="input-label text-center">
                <button type='button' href="/components/auth/signUp.html" class="btn-link formBtn" onClick={()=>navigate('/signup')}>Create New Account</button>
            </label>
            <label htmlFor="" class="input-label text-center">
                <button>login</button>
            </label>
          </form>
        </div>
    </div>
  );
}

export default Login;