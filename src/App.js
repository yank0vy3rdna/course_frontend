import {Route, Routes, useNavigate} from 'react-router-dom';
import ExcursionsList from "./pages/ExcursionsList";
import ExcursionPage from "./pages/ExcursionPage";
import LoginPage from "./pages/LoginPage";
import {useEffect, useState} from "react";
import {refresh, verify} from "./utils/auth";
import RegisterPage from "./pages/RegisterPage";


function App() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/home", {replace: true});
    }

    const [token, setToken] = useState()
    useEffect(() => {
        refresh(token, setToken)
    }, [])
    return (<div className={"container"}>
        <div className="row">
            <div className="six columns">
                <h1>Гиды с экскурсиями</h1>
            </div>
            <div className="three columns">
                <button onClick={() => navigate("/", {replace: true})}>Home</button>
            </div>
            <div className="three columns">
                <button onClick={() => navigate("/login", {replace: true})}>Login</button>
            </div>
        </div>
        <Routes>
            <Route path="/" element={<ExcursionsList/>}/>
            <Route path="/excursion/:id" element={<ExcursionPage token={token}/>}/>
            <Route path="/login" element={<LoginPage setToken={setToken}/>}/>
            <Route path="/signup" element={<RegisterPage setToken={setToken}/>}/>
        </Routes>
    </div>);
}

export default App;
