import {useNavigate} from "react-router-dom";
import {SerializeForm} from "../utils/form";

export default function RegisterPage() {
    const navigate = useNavigate();

    return <form onSubmit={(event) => {
        event.preventDefault()
        const json = SerializeForm(event.target)
        fetch("/api/crd/", {
            "method": "post",
            body: json,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json().then(() => {
            navigate("/login")
        }))
    }}>
        <h3>Sign up</h3>
        <div>Создай аккаунт и получи возможность занять место на экскурсии!</div>
        <br/>

        {/*username = x.username*/}
        {/*password = x.password*/}
        {/*mobile_number = x.mobile_number*/}
        {/*email = x.email*/}
        {/*surname = x.surname*/}
        {/*name = x.name*/}
        {/*patronymic = x.patronymic*/}
        {/*gender = x.gender*/}
        {/*date_birthday = x.date_birthday*/}
        <div className="row">
            <div className="six columns">
                <label htmlFor="usernameInput">Username</label>
                <input className="u-full-width" name="username" type="text" placeholder="username" id="usernameInput"/>
            </div>
        </div>

        <div className="row">
            <div className="six columns">
                <label htmlFor="passwordInput">Password</label>
                <input className="u-full-width" name="password" type="password" placeholder="your strong password"
                       id="passwordInput"/>
            </div>
        </div>
        <div className="row">
            <div className="six columns">
                <label htmlFor="mobileInput">mobile_number</label>
                <input className="u-full-width" name="mobile_number" type="text" placeholder="+79955004616"
                       id="mobileInput"/>
            </div>
        </div>
        <div className="row">
            <div className="six columns">
                <label htmlFor="nameInput">name</label>
                <input className="u-full-width" name="name" type="text" placeholder="Andrey" id="nameInput"/>
            </div>
        </div>

        <div className="row">
            <div className="six columns">
                <label htmlFor="emailInput">Email</label>
                <input className="u-full-width" name="email" type="email" placeholder="mail@ya.ru" id="emailInput"/>
            </div>
        </div>
        <div className="row">
            <div className="six columns">
                <label htmlFor="surnameInput">surname</label>
                <input className="u-full-width" name="surname" type="text" placeholder="Kryukov" id="surnameInput"/>
            </div>
        </div>
        <div className="row">
            <div className="six columns">
                <label htmlFor="patronymicInput">patronymic</label>
                <input className="u-full-width" name="patronymic" type="text" placeholder="Yurievich"
                       id="patronymicInput"/>
            </div>
        </div>
        <div className="row">
            <div className="one column">
                <label htmlFor="genderInput">gender</label>
            </div>
            <div className="two columns">
                <input className="u-full-width" name="gender" type="checkbox" id="genderInput"/>
            </div>
        </div>
        <div className="row">
            <div className="six columns">
                <label htmlFor="date_birthdayInput">date_birthday</label>
                <input className="u-full-width" name="date_birthday" type="date" id="date_birthdayInput"/>
            </div>
        </div>

        <div className="row">
            <div className="three columns">
                <input className="button-primary" type="submit" value="Sign up"/>
            </div>
            <div className="three columns">
                <button onClick={() => navigate("/login")}>Login</button>
            </div>
        </div>
    </form>
        }