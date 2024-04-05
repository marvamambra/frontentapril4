import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Forget(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigator = useNavigate()

    useEffect(() => {
        console.log('email is :',email);
        console.log('password is :',password);},[email, password])
        const handleSubmit = async() => {
        const response = await axios.post('http://localhost:2000/forget',{
            email,password
        })
        if(response.data){
            navigator('/login')

        }
    }
    
  return(
    
        <div style={{backgroundImage:`url(/img1.jpeg)`,backgroundSize:'cover',height:'800px'  ,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'10px'}}>
            <h2>RESET PASSWORD</h2>
            <input type="text" name="email" placeholder="Enter Email"  onChange={(e) => setEmail(e.target.value)}></input>
            <input type="text" name="newpassword" placeholder="Enter New password"  onChange={(e) => setPassword(e.target.value)}></input>
            <button style={{width:'80px',backgroundColor:'green',borderRadius:'5px'}} onClick={handleSubmit}>UPDATE</button>
        </div>
         );

}
export default Forget;