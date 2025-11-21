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

        fetch('http://localhost:3030/users/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalData)
        })
            .then(res => {
                if (!res.ok) {
                    alert('User or password incorrect!')
                    throw new Error('Invalid login')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                localStorage.setItem('accessToken',data.accessToken);
                navigate('/')
            })
            .catch(data => {
                console.log('Problem with login fetch request!')
                console.log(data)
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