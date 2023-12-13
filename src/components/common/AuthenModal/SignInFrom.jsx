import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

const SignInFrom = ({ switchAuthState }) => {
  const emailRef = useRef();
  const [emailValue, setEmailValue] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [emailBlur, setEmailBlur] = useState(false);

  const [passwordValue, setPasswordValue] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordBlur, setPasswordBlur] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setEmailValid(regexEmail.test(emailValue.trim()));
  }, [emailBlur]);

  useEffect(() => {
    setPasswordValid(passwordValue.trim().length > 7);
  }, [passwordBlur]);

  const handleSignIn = (e) => {
    e.preventDefault();
    setPasswordBlur(true);
    toast.error("Sign in error!");
  };

  return (
    <form action="" name="signInForm">
      <div className="flex flex-col gap-5">
        <div className="wrap-input-form">
          <input
            type="email"
            name="email"
            style={{ borderColor: emailValid || !emailBlur ? "green" : "red" }}
            placeholder="Email"
            className="input-form"
            autoComplete="off"
            required
            ref={emailRef}
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
      </div>

      <div className="flex flex-col gap-4">
        <button
          className="btn mt-[32px] w-full min-w-[64px] max-w-full tracking-wider"
          onClick={(e) => handleSignIn(e)}
        >
          SIGN IN
        </button>
        <button
          className="tracking-wide underline hover:opacity-70"
          onClick={() => switchAuthState()}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignInFrom;
