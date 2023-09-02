import React, { useState } from "react";
import './pop.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import logo from "../src/logo/logo.jpg"

function Popup() {

    //For Better understanding Individual state i have been used..
    const [isLogin, setIsLogin] = useState(true);
    const [Issignup, setIssignup] = useState(false);
    const [fullName, setFullName] = useState("");
    const [fullNameSign, setfullNamesign] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signpassword, setsignPassword] = useState("");
    const [contact, setContact] = useState("");
    const [error, setError] = useState("");
    const [errorName, setErrorName] = useState("");
    const [ErrorPassLogin, setErrorPassLogin] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [contactError, setContactError] = useState("");
    const [signupNameerr, setsignupNameerr] = useState("");
  
  
// toggle for each form
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setIssignup(!Issignup);

    setError(!error);
    
    /* setUsername(""); */
    setPassword("");
  };
  

  const toggleForms = () => {
    setIsLogin(!isLogin);
    setIssignup(!Issignup);

    setError(!error);
    /* setUsername(""); */
    setPassword("");
  };
  
//Error handling login 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!fullName >0){
        setErrorName("Name is must requored!")
        
    }
   

    if(!password > 0){
        setErrorPassLogin("Please enter the password")
    }else{
        setErrorPassLogin("")
    }

  }

//Error handling sign 
  const singUpHandle=(e)=>{
    e.preventDefault()

    if(!fullNameSign > 0){
        setsignupNameerr("Name is must required!")
        
    }
    else{
        setsignupNameerr("")
    }


    if(!contact > 0){
        setContactError("Please fill the contact")
    }else{
        setContactError("")
    }


   if(!email > 0){
    setEmailError("PLease fill the email id")
   }

   else{
    setEmailError("")
   }


   var passwordRegex = `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`;
   if (!signpassword > 0){
    setPasswordError("Please fill the password")
   }
   else if (signpassword.match(passwordRegex)) {
    setPasswordError("Password must contain at least one special character");
   }
   else{
    setPasswordError("")
   } 

  };
  
  const buttonClass = isLogin ? "Login_button" : '';
  const buttonClasss = Issignup ? "Login_button" : '';



 //rendering component
  return (
    <div className="popup">
      <div className="popup-content">
            <img className="log_main" src={logo} alt="Company_logo"></img>
        <div className="Buttons">
            <h2
             className={buttonClass} onClick={toggleForm} >Login</h2>
            <h2 className={buttonClasss}  onClick={toggleForm}>Sign up</h2>
        </div>
    <div className="popup-body">  
        <div className="main_form">
         {/* //Login Form  */}     
        {isLogin && (
            <form className="" onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="fullname" className="Name">
                    Full Name <span className="required">*</span>
                </label>
                <input
                    id="fullname"
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <p className="error">{errorName}</p>
                </div>
                <div className="form-group">
                <label htmlFor="password" className="Name">
                    Password <span className="required">*</span>
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="error">{ErrorPassLogin}</p>
                </div>
                <div className="remember-forgot">
                <div className="remember-me">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                </div>
                <div className="forgot-password">
                    <a href="#manish" onClick={(e) => e.preventDefault()}>
                    Forgot Password?
                    </a>
                </div>
                </div>
                <button className="sumbit_btn" type="submit">
                {isLogin ? "Login" : "Sign Up"}
                </button>
                <p>
                {isLogin && "Don't have an Account? "}
                <span className="toggle-form" onClick={toggleForm}>
                    {isLogin && "Sign Up"}
                </span>
                </p>
            </form>
        )}
        {/* //SignUp Form  */}   
        <div className="signup_container">
            {Issignup && (
                <form className="sig" onSubmit={singUpHandle}>
                    <div className="form-group">
                        <label htmlFor="fullname" className="Name">
                            Full Name <span className="required">*</span>
                        </label>
                        <input
                            id="fullname"
                            type="text"
                            placeholder="Full Name"
                            value={fullNameSign}
                            onChange={(e) => setfullNamesign(e.target.value)}
                        />
                        <p className="error">{signupNameerr}</p>
                    </div>
                    <div className="form-group">
                    <label htmlFor="email" className="Name">
                        Email <span className="required">*</span>
                    </label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="error">{emailError}</p>
                    </div>
                    <div className="form-group">
                    <label htmlFor="password" className="Name">
                        Password <span className="required">*</span>
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                    
                        value={signpassword}
                    
                        onChange={(e) => setsignPassword(e.target.value)}
                    />
                    <p className="error">{passwordError}</p>
                    </div>
                    <div className="form-group">
                    <label htmlFor="contact" className="Name">
                        Contact <span className="required">*</span>
                    </label>
                    <input
                        id="contact"
                        type="text"
                        placeholder="Contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                    <p className="error">{contactError}</p>
                    </div>

                    <div className="btn_container">
                        <button onClick={toggleForms} 
                        ><span><AiOutlineArrowLeft/>Back</span></button>
                    
                    <button type="submit" className="save_verify_btn">SAVE & VERIFY</button>
                
                    </div>
                </form>
            )}     
        </div> 
        </div>                  
        </div>
      </div>
    </div>
  );
}

export default Popup;
