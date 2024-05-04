import Button from "../Components/Button";
import sideImg from "../assets/images/login/login.svg";
import useAuth from "../CustomHooks/useAuth";

const Signup = () => {
  const { userSignup, updateUserProfile } = useAuth();

  async function handleSignup(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.password.value;
    try {
      await userSignup(email, pass);
      await updateUserProfile(name);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="hero bg-base-100 my-5">
      <div className="hero-content flex-col lg:flex-row">
        <div className="max-w-[400px]">
          <img src={sideImg} alt="register image" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h3 className="text-4xl pt-3 font-semibold text-center">Sign Up</h3>
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
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
                placeholder="Your Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <Button>Sign Up</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
