import Button from "../Components/Button";
import sideImg from "../assets/images/login/login.svg";
import useAuth from "../CustomHooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { userSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    try {
      await userSignIn(email, pass);
      navigate(`${location.state || "/"}`);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="hero  bg-base-100 my-5">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={sideImg} alt="register image" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h3 className="text-4xl pt-3 font-semibold text-center">Login</h3>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <Button>Sign In</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
