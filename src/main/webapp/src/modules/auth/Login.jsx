import React, {useState, useEffect, useRef} from 'react';
import useAuth from "../../hooks/useAuth";
import {login} from "./auth.service";
import {useNavigate, useLocation} from 'react-router-dom';
import {JWT_CONSTANTS} from "../../config/constans";

const Login = () => {
    const {setAuth} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const userRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [rememberMe, setRememberMe] = useState(true);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ username: user, password: pwd });
            const accessToken = response?.data?.accessToken;
            setAuth({ accessToken });

            rememberMe && localStorage.setItem(JWT_CONSTANTS.LOCAL_STORAGE_KEY, accessToken);

            setUser('');
            setPwd('');
            navigate(location.state?.from?.pathname || "/");
        } catch(err) {
            setErrMsg(err.response.message ? err.response.message : "INTERNAL SERVER ERROR");
        }
    }

    return (
        <section>
            {errMsg && <p>Error: {errMsg}</p>}
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    type="text"
                    required
                    ref={userRef}
                    autoComplete="off"
                    onChange={e => setUser(e.target.value)}
                    value={user}
                />
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    required
                    autoComplete="off"
                    onChange={e => setPwd(e.target.value)}
                    value={pwd}
                />

                <input type="checkbox" id="remember_me" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                <label htmlFor="remember_me">Remember me</label>
                <button>Sign In</button>
            </form>
        </section>
    );
};

export default Login;