import { useState } from "react";
import { useSelector } from "react-redux";
import BackButton from "../components/BackButton";

function UserProfile() {
  const { user } = useSelector((state) => state.auth);

  const [name] = useState(user.name);
  const [email] = useState(user.email);

  return (
    <>
      <div className="container flex justify-center">
        <div className=" m-5 p-5 shadow card col-7 ">
          <section className="heading mb-2 text-center">
            <h3>User Profile</h3>
          </section>

          <section className="text-left mb-5">
            <div className="py-3">
              <label htmlFor="name">User Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                disabled
              />
            </div>
            <div className="py-3">
              <label htmlFor="email">User Email</label>
              <input
                type="text"
                className="form-control"
                value={email}
                disabled
              />
            </div>
          </section>
          <BackButton url="/" />
        </div>
      </div>
    </>
  );
}

export default UserProfile;
