import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

const SignUpFrom = ({ switchAuthState }) => {
  const nameRef = useRef();

  const [nameValue, setNameValue] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [nameBlur, setNameBlur] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [emailBlur, setEmailBlur] = useState(false);

  const [passwordValue, setPasswordValue] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordBlur, setPasswordBlur] = useState(false);

  const [cfPasswordValue, setCfPasswordValue] = useState("");
  const [cfPasswordValid, setCfPasswordValid] = useState(false);
  const [cfPasswordBlur, setCfPasswordBlur] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showCfPassword, setShowCfPassword] = useState(false);

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    setNameValid(nameValue.trim().length > 1);
  }, [nameBlur]);

  useEffect(() => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setEmailValid(regexEmail.test(emailValue.trim()));
  }, [emailBlur]);

  useEffect(() => {
    setPasswordValid(passwordValue.trim().length > 7);
  }, [passwordBlur]);

  useEffect(() => {
    setCfPasswordValid(cfPasswordValue.trim() === passwordValue.trim());
  }, [cfPasswordBlur]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    setEmailBlur(true);
    setPasswordBlur(true);
    setCfPasswordBlur(true);
    if (!nameValid || !emailValid || !passwordValid || !cfPasswordValid) {
      return;
    }
    toast.success("Sign up success!");
    setSuccess(true);
    switchAuthState();
    console.log(nameValue, emailValue, passwordValue, cfPasswordValue);
  };

  return (
    <form action="" name="signUpForm">
      <div className="flex flex-col gap-5">
        <div className="wrap-input-form">
          <input
            type="text"
            placeholder="Display Name"
            className="input-form"
            style={{ borderColor: nameValid || !nameBlur ? "green" : "red" }}
            value={nameValue}
            ref={nameRef}
            onChange={(e) => setNameValue(e.target.value)}
            onFocus={() => setNameBlur(false)}
            onBlur={() => setNameBlur(true)}
          />
          {nameValid || !nameBlur ? (
            <></>
          ) : (
            <span className="text-validation">
              Display Name minimum 2 characters
            </span>
          )}
        </div>

        <div className="wrap-input-form">
          <input
            type="email"
            name="email"
            style={{ borderColor: emailValid || !emailBlur ? "green" : "red" }}
            placeholder="Email"
            className="input-form"
            autoComplete="off"
            required
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            onFocus={() => setEmailBlur(false)}
            onBlur={() => setEmailBlur(true)}
          />
          {emailValid || !emailBlur ? (
            <></>
          ) : (
            <span className="text-validation">Invalid email</span>
          )}
        </div>

        <div className="wrap-input-form relative">
          <input
            type={showPassword ? "text" : "password"}
            style={{
              borderColor: passwordValid || !passwordBlur ? "green" : "red",
            }}
            name="Password"
            placeholder="Password"
            className="input-form"
            autoComplete="off"
            required
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            onFocus={() => setPasswordBlur(false)}
            onBlur={() => setPasswordBlur(true)}
          />
          <i
            className="fa-solid fa-eye transition-short absolute right-1 top-[3px] cursor-pointer p-3 hover:opacity-60"
            hidden={!passwordValue}
            onClick={() => setShowPassword(!showPassword)}
          ></i>
          <i
            className="fa-solid fa-eye-slash transition-short absolute right-1 top-[3px] cursor-pointer p-3 hover:opacity-60"
            hidden={!showPassword}
            onClick={() => setShowPassword(!showPassword)}
          ></i>
          {passwordValid || !passwordBlur ? (
            <></>
          ) : (
            <span className="text-validation">
              Password minimum 8 characters
            </span>
          )}
        </div>

        <div className="wrap-input-form relative">
          <input
            type={showCfPassword ? "text" : "password"}
            style={{
              borderColor: cfPasswordValid || !cfPasswordBlur ? "green" : "red",
            }}
            name="Cf Password"
            placeholder="Confirm Password"
            className="input-form"
            autoComplete="off"
            required
            value={cfPasswordValue}
            onChange={(e) => setCfPasswordValue(e.target.value)}
            onFocus={() => setCfPasswordBlur(false)}
            onBlur={() => setCfPasswordBlur(true)}
          />
          <i
            className="fa-solid fa-eye transition-short absolute right-1 top-[3px] cursor-pointer p-3 hover:opacity-60"
            hidden={!cfPasswordValue}
            onClick={() => setShowCfPassword(!showCfPassword)}
          ></i>
          <i
            className="fa-solid fa-eye-slash transition-short absolute right-1 top-[3px] cursor-pointer p-3 hover:opacity-60"
            hidden={!showCfPassword}
            onClick={() => setShowCfPassword(!showCfPassword)}
          ></i>
          {cfPasswordValid || !cfPasswordBlur ? (
            <></>
          ) : (
            <span className="text-validation">
              Confirm password must same as password above
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <button
          className="btn mt-[32px] w-full min-w-[64px] max-w-full tracking-wider"
          onClick={(e) => handleSignUp(e)}
        >
          SIGN UP
        </button>
        <button
          className="tracking-wide underline hover:opacity-70"
          onClick={() => switchAuthState()}
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignUpFrom;
