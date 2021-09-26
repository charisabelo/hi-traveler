import "./Login.scss";

const Login = ({ setHasAccount }) => {
  const createAccount = () => {
    setHasAccount(false);
  };

  return (
    <div className="login">
      <div className="login__header-container">
        <h1 className="login__header">Sign in to Reel Ppl</h1>
        <h4 className="login__subheader">
          Welcome back! It's a great day to make a connection!
        </h4>
      </div>
      <div className="login__form-container">
        <form className="login__form" action="" autoComplete="off">
          <input
            className="login__email"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="login__pw"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className="login__btn" type="submit">
            LOGIN
          </button>
        </form>
        <p className="login__create">
          Not registered?{" "}
          <span onClick={createAccount} className="login__create--span">
            Create an account.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
