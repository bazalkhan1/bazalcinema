import {useState} from "react";
import pass from './Credentials.js'
const Loginform = () =>{
    const [name, setName] = useState("");
    const [password, setpassword] = useState("");
    function handleform (event){
        event.preventDefault();
        if(pass[0].pass === password && pass[0].name===name)
        {
            alert("SUCCESS")
        }
        else{
            alert("noooo")
        }
    }
    return(
        <div style={{color : 'white'}}>
    <form onSubmit={handleform}>
            <h1 className="signinl">SIGN IN</h1>
            <br />
            <label> EMAIL</label> 
            <br />
            <input  type = "text" placeholder="Email" required onChange={(e) => setName(e.target.value)} value = {name} />
            <label> EMAIL</label>
            <br /> 
            <input type="password" placeholder="Password" required onChange={(e) => setpassword(e.target.value)} value = {password}/>
            <br />
            <input type = "submit" />
            <br />

        </form>
        </div>

    )
}

export default Loginform;
