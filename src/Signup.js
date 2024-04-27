import { useState } from "react";
import "./signup.css"
import { Link } from "react-router-dom";



const Signup = () => {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[pass, setPass] = useState('')
    const[confirmPass, setConfirmPass] = useState('')
    const[correct, setCorrect] = useState('')
    const[wrong, setWrong] = useState('')
    
    const checks = () => {
        if(!name && !email && !pass && !confirmPass){
            setCorrect("")
            setWrong('Error: All the fields are mandatory')
        }
        else{
            let data = [{name},{email},{pass}]

            localStorage.setItem("profile", JSON.stringify(data))
                setWrong('')
                setCorrect("Successfully Signed Up!")
        }
    }
      return (
        
            <div>
            <div className="link" ><Link to={"/profile"}>Profile</Link></div>
        <div className="signup">
        
          <h1 className="left">Signup</h1>
          <label className="left" htmlFor="name">Full Name</label>
          <input className="inp" type="text" id="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <label className="left" htmlFor="email">Email</label>
          <input className="inp" type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <label className="left" htmlFor="password">Password</label>
          <input className="inp" type="password" id="password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
          <label className="left" htmlFor="confirmpass">Confirm Password</label>
          <input className="inp" type="password" id="confirmPass" value={confirmPass} onChange={(e)=>{setConfirmPass(e.target.value)}}/>
          {correct && <p style={{color: "green"}}>{correct}</p>}
          {wrong && <p style={{color: "redas"}}>{wrong}</p>}
          <button className="btn" type="submit" onClick={()=>{checks()}}>Signup</button>
        </div>
        </div>
       
      );
    };
    
    export default Signup;