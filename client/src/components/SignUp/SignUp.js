import "./SignUp.scss";

const SignUp = ({ setHasAccount }) => {
  const signIn = () => {
    setHasAccount(true);
  };

  return (
    <div className="sign-up">
      <div className="sign-up__header-container">
        <h1 className="sign-up__header">Create an account</h1>
        <h4 className="sign-up__subheader">
          According to Trackvia, a CRM can increase revenue by 41%, and improve{" "}
          <br />
          customer retention by as much as 27%.
        </h4>
      </div>
      <div className="sign-up__form-container">
        <form className="sign-up__form" action="" autoComplete="off">
          <input
            className="sign-up__firstname"
            type="text"
            name="firstname"
            placeholder="First Name"
          />
          <input
            className="sign-up__lastname"
            type="text"
            name="lastname"
            placeholder="Last Name"
          />
          <input
            className="sign-up__email"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="sign-up__pw"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className="sign-up__btn" type="submit">
            SIGN UP
          </button>
        </form>
        <p className="sign-up__create">
          Already have an account?{" "}
          <span onClick={signIn} className="login__create--span">
            Sign in.
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
