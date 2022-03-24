import React, {useRef, useState, useEffect} from 'react';
import {register} from "./auth.service";
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const userRef = useRef(null);

    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatchPwd, setValidMatchPwd] = useState(false);
    const [matchPwdFocus, setMatchPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        setValidUser(result);
    }, [user]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        setValidMatchPwd(pwd === matchPwd);
    }, [matchPwd, pwd]);

    useEffect(() => {
      setErrMsg('');
    }, [matchPwd, pwd, user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!USER_REGEX.test(user) || !PWD_REGEX.test(pwd)) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            await register({ username: user, name: 'blank', password: pwd });
            setSuccess(true);
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
        }
    }

    return (
       <>
           {success ? (
                   <section>
                       <p>Success!</p>
                   </section>
               ) :
               (
                   <section>
                       {errMsg &&  <p>Error: {errMsg}</p>}
                       <h1>Register</h1>

                       <form onSubmit={handleSubmit}>
                           <label htmlFor="username">
                               Username:
                               <span>
                    {user && <FontAwesomeIcon icon={validUser ? faCheck : faTimes} />}
                </span>
                           </label>
                           <input
                               id="username"
                               type="text"
                               ref={userRef}
                               autoComplete="off"
                               onChange={e => setUser(e.target.value)}
                               required
                               aria-invalid={validUser ? "false" : "true"}
                               aria-describedby="uidnote"
                               onFocus={() => setUserFocus(true)}
                               onBlur={() => setUserFocus(false)}
                           />
                           {(userFocus && user && !validUser) &&
                               <p id="uidnote">
                                   <FontAwesomeIcon icon={faInfoCircle} />
                                   4 to 24 characters.<br />
                                   Must begin with a letter.<br />
                                   Letters, numbers, underscores, hyphens allowed.<br />
                               </p>
                           }

                           <label htmlFor="password">
                               Password:
                               {pwd && <FontAwesomeIcon icon={validPwd ? faCheck : faTimes} />}
                           </label>
                           <input
                               type="password"
                               id="password"
                               onChange={(e) => setPwd(e.target.value)}
                               value={pwd}
                               required
                               aria-invalid={validPwd ? "false" : "true"}
                               aria-describedby="pwdnote"
                               onFocus={() => setPwdFocus(true)}
                               onBlur={() => setPwdFocus(false)}
                           />
                           {(pwdFocus && pwd && !validPwd) &&
                               <p id="pwdnote">
                                   <FontAwesomeIcon icon={faInfoCircle} />
                                   8 to 24 characters.<br />
                                   Must include uppercase and lowercase letters, a number and a special character.<br />
                                   Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                               </p>
                           }

                           <label htmlFor="confirm_pwd">
                               Confirm Password:
                               {matchPwd && <FontAwesomeIcon icon={validMatchPwd ? faCheck : faTimes} />}
                           </label>
                           <input
                               type="password"
                               id="confirm_pwd"
                               onChange={(e) => setMatchPwd(e.target.value)}
                               value={matchPwd}
                               required
                               aria-invalid={validMatchPwd ? "false" : "true"}
                               aria-describedby="confirmnote"
                               onFocus={() => setMatchPwdFocus(true)}
                               onBlur={() => setMatchPwdFocus(false)}
                           />
                           {(matchPwdFocus && matchPwd && !validMatchPwd) &&
                               <p id="confirmnote">
                                   <FontAwesomeIcon icon={faInfoCircle} />
                                   Must match the first password input field.
                               </p>
                           }

                           <button disabled={!validUser || !validPwd || !validMatchPwd}>Sign Up</button>
                       </form>
                   </section>
               )
           }
       </>
    );
};

export default Register;