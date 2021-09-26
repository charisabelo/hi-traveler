import "./Start.scss";
import { useState } from "react";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import {
  ComponentTransition,
  AnimationTypes,
} from "react-component-transition";

const Start = () => {
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <div className="start">
      <div className="start__signup-container">
        <div className="start__main">
          <div className="start__signup">
            <div className="start__logo"></div>
            <ComponentTransition
              className="start__container"
              enterAnimation={AnimationTypes.slideRight.enter}
              exitAnimation={AnimationTypes.slideLeft.exit}
            >
              {hasAccount ? (
                <Login setHasAccount={setHasAccount} />
              ) : (
                <SignUp setHasAccount={setHasAccount} />
              )}
            </ComponentTransition>
          </div>
          <div className="start__sign-photo"></div>
        </div>
      </div>
    </div>
  );
};

export default Start;
