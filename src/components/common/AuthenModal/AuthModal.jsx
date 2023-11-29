// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowAuthModal } from "@/redux/movieSlice";

import logo from "@/assets/logos/logo.svg";
import { useEffect, useState } from "react";
import SignInFrom from "./SignInFrom";
import SignUpFrom from "./SignUpFrom";

const AuthModal = () => {
  const dispatch = useDispatch();
  const showAuthModal = useSelector((state) => state.movies.showAuthModal);

  const [actionState, setActionState] = useState("signin");
  useEffect(() => {
    if (showAuthModal) {
      setActionState("signin");
    }
  }, [showAuthModal]);

  return (
    <>
      {showAuthModal ? (
        <>
          <div className="transition-long absolute left-1/2 top-1/2 z-[101] w-full max-w-[600px] translate-x-[-50%] translate-y-[-44%] p-8">
            <div className="boxshadow-authmodal rounded-xl bg-background p-8">
              <img
                src={logo}
                alt="TvFlix logo"
                className="m-auto mb-8 w-[130px]"
              />

              {actionState === "signin" && (
                <SignInFrom switchAuthState={() => setActionState("signup")} />
              )}
              {actionState === "signup" && (
                <SignUpFrom switchAuthState={() => setActionState("signin")} />
              )}
            </div>
          </div>

          <div
            className="overlay transition-long transition-sidebar fixed bottom-0 left-0 right-0 top-0 z-[100] w-full bg-background opacity-50"
            onClick={() => dispatch(setShowAuthModal(!showAuthModal))}
          ></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default AuthModal;
