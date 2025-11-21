import { useNavigate } from "react-router";


export default function Register() {

    const navigator = useNavigate();

    function registerSubmit(data){
        
        
        
        let email = data.get('email');
        let password = data.get('password')
        let confirmPassword = data.get('confirm-password')

        console.log(email);
        console.log(password);
        console.log(confirmPassword);

        
        let finalData = {
            email,
            password,
        }
        

        if(password === confirmPassword) {
            fetch('http://localhost:3030/users/register',{
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(finalData)
            })
            .then(res=>{
                res.json()
            })
            .then(data=>{
                console.log(data)
                navigator('/')
            })
            .catch(info=>{
                console.log(`Problem with fetch register.`)
                console.log(info)
            })
        } else {
            alert('The 2 password fields must be the same in order to make a correct registration!')
        }
        
            
        
        
        
    }

    return (
        <section id="register-page" className="content auth">
            <form id="register" action={registerSubmit}>
                <div className="container">
                    <div className="brand-logo" />
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