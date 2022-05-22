import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container mt-4 flex justify-center items-center">
        <section className="form col-md-6 card p-4 shadow-md ">
          <h3 className="pb-3 text-primary">SignUp</h3>
          <form onSubmit={onSubmit}>
            <div className="py-3 px-2">
              <input
                type="text"
                className="form-control p-3 "
                id="name"
                name="name"
                value={name}
                onChange={onChange}
                placeholder="Enter your name"
                required
              />
            </div>
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
              <input
                type="password"
                className="form-control p-3"
                id="password2"
                name="password2"
                value={password2}
                onChange={onChange}
                placeholder="Confirm password"
                required
              />
            </div>
            <div className="py-3 px-2">
              <button className="btn btn-block">Submit</button>
            </div>
          </form>
          <div className="d-flex items-center justify-center">
            <h2 className="text-muted mr-2"> Already have an account? </h2>
            <h2>
              <a href="/login" className="text-primary">
                SIGNIN
              </a>
            </h2>
          </div>
        </section>
      </div>
    </>
  );
}

export default Register;
