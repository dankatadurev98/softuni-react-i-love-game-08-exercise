import { useNavigate,Navigate } from "react-router";
import { endpoints, request } from "../../requests/request";
import { useContext } from "react";
import { authContext } from "../../context/authContext";

export default function Login() {

    let navigate = useNavigate();
    const {login,user} = useContext(authContext)

    function submitLogin(formData) {

        let data = Object.fromEntries(formData);

        const email = data.email;
        const password = data.password;
        

        let finalData = {
            email,
            password
        }
       
       
    
       request('POST',endpoints.login,finalData)
        .then(res=>{
            
            login(res)
            navigate('/')
            
        })
        .catch(err=>{
            console.log(err);
            
        })

        
    }  

    return (
        <section id="login-page">
            <form id="login" action={submitLogin}>
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" />
                    <label htmlFor="login-pass">Password</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        placeholder="Password"
                    />
                    <input type="submit" className="btn submit" defaultValue="Login" />
                </div>
            </form>
        </section>

    )
}