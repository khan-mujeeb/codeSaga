import { Form, InputField } from "./Form";
import AuthContext from "../../context/AuthContext.jsx";
import { useEffect, useContext } from "react";

function SignInForm() {
  const { setEmail, user, setUser, setPassword, onSubmitlogin } =
    useContext(AuthContext);

  useEffect(() => {
    const alreadyUser = JSON.parse(localStorage.getItem("user"));
    if (alreadyUser) {
      setUser(alreadyUser);
    }
  }, [setUser]);

  return (
    <>
      <Form title="Sign-in">
        <InputField type="email" placeholder="Email" setData={setEmail} />
        <InputField
          type="password"
          placeholder="Password"
          setData={setPassword}
        />

        <input
          type="submit"
          className="btn bg-orange-300   "
          value="Login"
          onClick={onSubmitlogin}
        />
      </Form>
    </>
  );
}

export default SignInForm;
