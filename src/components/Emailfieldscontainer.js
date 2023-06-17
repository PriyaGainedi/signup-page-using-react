import React,{useState} from "react";



const Emailfieldscontainer = () => {
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let [confirmPassword,setConfirmPassword] = useState("");
    let [error,setError] = useState("");
    let [success,setSuccess] = useState("");
 
    function validateForm(e){
        e.preventDefault();
        setError("");
        setSuccess("");
        if(!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()){
            setError("Please Fill All Fields");
            return;
        }
        if(!name.trim().includes(' ') || (/\d/.test(name.trim()))){
            setError("Please Enter Full Name / Valid Name");
            return;
        }
        if(!email.trim().includes('@')){
            setError("Please Enter a Valid Email ID");
            return;
        }
        if(!(password==confirmPassword)){
            setError("Password and confirm password are mismatch");
            console.log("passwore");
            return;
        }
        else{
            setSuccess('Successfully Signed Up! Happy Coding....')
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            return;
        }
    }

    return (
        <form className="emailfields">
            <h1>SignUp</h1>
            <div>
                <input 
                    type="text"
                    placeholder="Full Name"
                    value={name} 
                    onChange={(e)=>setName(e.target.value)} 
                    required >
                </input>
            </div>
            <div>
                <input 
                    type="email" 
                    placeholder="Email ID" 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    required >
                </input>
            </div>
            <div>
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)} 
                    required >
                </input>
            </div>
            <div>
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword} 
                    onChange={(e)=>setConfirmPassword(e.target.value)} 
                    required >
                </input>
            </div>
            <div className="showMsg">
                {
                    error && <p className="error">{error}</p> 
                }
                {   
                    success && <p className="success">{success}</p>
                }
            </div>
            <div class="submitBtnDiv">
                <button 
                    type="submit" 
                    id="submitBtn" 
                    onClick={validateForm}>
                    SignUp
                </button>
            </div>
        </form>
    )
}

export default Emailfieldscontainer;