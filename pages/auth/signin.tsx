import { NextPage } from "next";
import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import Button from "../components/button/Button";
import { StyledForm, StyledH1, StyledInput } from "../../styles/globals";

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
      // validate your userinfo
      e.preventDefault();
  
      const res = await signIn("credentials", {
        email: userInfo.email,
        password: userInfo.password,
        redirect: false,
      });
  
      console.log(res);
    };
    return (
      <div className="formContainer">
        <StyledForm onSubmit={handleSubmit}>
          <StyledH1>Login</StyledH1>
          <StyledInput
            value={userInfo.email}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, email: target.value })
            }
            type="email"
            placeholder="john@email.com"
          />
          <StyledInput
            value={userInfo.password}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, password: target.value })
            }
            type="password"
            placeholder="********"
          />
          <Button buttonName="Login" />
        </StyledForm>
      </div>
    );
  };

export default SignIn;