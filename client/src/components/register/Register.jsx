import { useNavigate } from "react-router";


export default function Register({
   user,
   onRegister
}) {

    

    const navigator = useNavigate();

    function registerSubmit(data){
        
        let email = data.get('email');
        let password = data.get('password')
        let confirmPassword = data.get('confirm-password')

        
        if(!email || !password){
            return alert('Email and Password are required!')
        }
        if(password !== confirmPassword){
           return alert('Passwords must be the same!')
        }

       onRegister(email,password)
       navigator('/')
       
    }

    return (
        <section id="register-page" className="content auth">
            <form id="register" action={registerSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    {user && <h2>You are already registered with {user.email}</h2>}
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="Password"
                    />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        placeholder="Repeat Password"
                    />
                    <input className="btn submit" type="submit" defaultValue="Register" />
                </div>
            </form>
        </section>

    )
}