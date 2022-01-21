import {useNavigate} from "react-router-dom";
import {SerializeForm} from "../utils/form";


export default function LoginPage({setToken}) {
    const navigate = useNavigate();
    return <form onSubmit={(event) => {
        event.preventDefault()
        const json = SerializeForm(event.target)
        fetch("/api/token/", {
            "method": "post",
            body: json,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json().then(data => {
            setToken(data)
            navigate("/")
        }))
    }}>
        <h3>Login page</h3>
        <div>Войди в систему и получи возможность занять место на экскурсии!</div>
        <br/>
        <div className="row">
            <div className="six columns">
                <label htmlFor="usernameInput">Username</label>
                <input className="u-full-width" name="username" type="text" placeholder="my_username" id="usernameInput"/>
            </div>
        </div>

        <div className="row">
            <div className="six columns">
                <label htmlFor="passwordInput">Password</label>
                <input className="u-full-width" name="password" type="password" placeholder="your strong password" id="passwordInput"/>
            </div>
        </div>
        <div className="row">
            <div className="three columns">
                <input className="button-primary" type="submit" value="Login"/>
            </div>
            <div className="three columns">
                <button onClick={() => navigate("/signup")}>Sign up</button>
            </div>
        </div>
    </form>
}