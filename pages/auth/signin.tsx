import { NextPage } from "next";
import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import Button from "../components/button/Button";
import { StyledForm, StyledH1, StyledInput } from "../../styles/globals";
import { useRouter } from "next/router";

const SignIn: NextPage = (props: any): JSX.Element => {
    const [userInfo, setUserInfo] = useState({ email: "", password: "", name: "" });
    const [hasError, setHasError] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
      if (!userInfo.email || !userInfo.password) {
        setHasError('Preencha os campos');
        return
      }
      // validate your userinfo
      e.preventDefault();
      setHasError('')
      setLoading(true)
      const res = await signIn("credentials", {
        email: userInfo.email,
        password: userInfo.password,
        name: userInfo.name,
        redirect: false,
      });
      setLoading(false)
  
      if (res && res.ok) {
        if(router.query.callbackUrl) {
         // router.push(router.query.callbackUrl as string)
         router.push('/protected')
        } else {
        //  router.push('/protected')
        }
      }  else {
       setHasError('Esse usuário não existe')
    }

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
            placeholder="john@email.com"
            disabled={loading}
          />
          <StyledInput
            value={userInfo.password}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, password: target.value })
            }
            type="password"
            placeholder="********"
            disabled={loading}
          />
          <Button buttonName="Login" />
          {hasError}
          {loading && 'Carregando...'}
        </StyledForm>
      </div>
    );
  };

export default SignIn;