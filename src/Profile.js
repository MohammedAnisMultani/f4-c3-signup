import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Profile.css"


const Profile = () => {
   
    const[thisname, setThisName] = useState('')
    const[thisemail, setThisEmail] = useState('')
    const[thispass, setThisPass] = useState('')

   
     
    useEffect(()=>{
        let json = localStorage.getItem("profile")
        let data = JSON.parse(json)
        setThisName(data[0].name)
        setThisEmail(data[1].email)
        setThisPass(data[2].pass)
    },[])
    
  const removevalues = () => {
    setThisName('')
    setThisEmail('')
    setThisPass('')
   localStorage.removeItem('profile')
  
   
  }
    return(
       <div>
        <div>
            <Link to={"/signup"}>Signup</Link>
        </div>
         <div className="parent"> 
            <h1 className="inps">Profile</h1>
            <h1 className="inps">Full Name: {thisname}</h1>
            <h1 className="inps">Email: {thisemail}</h1>
            <h1 className="inps">Password: {thispass}</h1>
            <button className="btn" type="submit" onClick={()=>{removevalues()}}>Logout</button>

        </div>
       </div>
    )
}

export default Profile