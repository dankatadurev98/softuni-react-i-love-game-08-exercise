import { useNavigate } from "react-router";
import { endpoints, request } from "../../requests/request";
import { authContext } from "../../context/authContext";
import { useContext } from "react";


export default function Register() {



    const navigator = useNavigate();
    const {login} = useContext(authContext)

    function registerSubmit(formData) {

        let data = Object.fromEntries(formData)
        const email = data.email;
        const password = data.password;
        const confirmPassword = data.confirmPassword;


        if (!email || !password) {
            return alert('Email and Password are required!')
        }
        if (password !== confirmPassword) {
            return alert('Passwords must be the same!')
        }

        const finalData = {
            email,
            password,
        }

        request('POST', endpoints.register, finalData)
            .then(res => {
                localStorage.setItem('user',JSON.stringify(res));
                login(res)
                console.log(res);
                
                navigator('/')
            })
            .catch(err => {
                console.log(err);

            })

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
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Repeat Password"
                    />
                    <input className="btn submit" type="submit" defaultValue="Register" />
                </div>
            </form>
        </section>

    )
}