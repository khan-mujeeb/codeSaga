import { Form, InputField } from "./Form";
import AuthContext from "../../context/AuthContext.jsx";
import { useEffect, useContext } from "react";
function SignUpFrom() {
  const { setEmail, setUser, setPassword, onsubmitSignUp } =
    useContext(AuthContext);

  useEffect(() => {
    const alreadyUser = JSON.parse(localStorage.getItem("user"));
    if (alreadyUser) {
      setUser(alreadyUser);
    }
  }, [setUser]);
  return (
    <>
      <Form title="Sign-up">
        <InputField type="email" placeholder="Email" setData={setEmail} />
        <InputField
          type="password"
          placeholder="Password"
          setData={setPassword}
        />
        <input
          type="submit"
          className="btn bg-orange-300   "
          value="Sign up"
          onClick={onsubmitSignUp}
        />
      </Form>
    </>
  );
}

export default SignUpFrom;
