import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container mt-5 d-flex">
        <section className="form col-md-6 card p-4 shadow">
          <h3 className="text-primary pb-3">SignIn</h3>

          <form onSubmit={onSubmit}>
            <div className="py-3 px-2">
              <input
                type="email"
                className="form-control p-3"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="py-3 px-2">
              <input
                type="password"
                className="form-control p-3"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Enter password"
                required
              />
            </div>
            <div className="py-3 px-2">
              <button className="btn btn-block">Submit</button>
            </div>
          </form>
          <div className="d-flex items-center justify-center">
            <h2 className="text-muted mr-2"> Don't have an account? </h2>
            <h2>
              <a href="/register" className="text-primary">
                SIGNUP
              </a>
            </h2>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
