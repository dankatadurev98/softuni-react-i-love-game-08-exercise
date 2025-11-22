import { useNavigate } from "react-router";

export default function Login() {

    let navigate = useNavigate();

    function submitLogin(formData) {

        let email = formData.get('email')
        let password = formData.get('password');

        let finalData = {
            email,
            password
        }

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