import axios from "axios";
import router from "next/router";
import { useState } from "react";
import Button from "../pages/components/button/Button";
import { StyledFlexStart, StyledForm, StyledH1, StyledInput, StyledLabel } from "../styles/globals";


export default function Create() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '', name: '' });
  const [hasError, setHasError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('')

  const user = {
    email: userInfo.email,
    password: userInfo.password,
    name: userInfo.name
  }

  const createUsers = async (e: { preventDefault: any; }) => {
    e.preventDefault()
    setHasError(''),
    setLoading(true)
   // if (userInfo.email && userInfo.password && userInfo.name) {
    const json = await axios.post('/api/register', user)
      if (json.data.user) {
        setMessage('Top eba eba')
      } else {
      
       // setMessage('deu ruim'),
      //  setHasError('Esse usuário não existe')
      }
    // }
  };
  
  return (
    <div>
      <div className="formContainer">
        <StyledForm onSubmit={createUsers}>
          <StyledH1>Register</StyledH1>
          <StyledFlexStart>
            <StyledLabel>Name</StyledLabel>
          </StyledFlexStart>
             <StyledInput
            value={userInfo.name}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, name: target.value })
            }
            placeholder="Your name"
            disabled={loading}
          />
          <StyledFlexStart>
            <StyledLabel>Email</StyledLabel>
          </StyledFlexStart>
          <StyledInput
            value={userInfo.email}
            type="email"
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, email: target.value })
            }
            placeholder="john@email.com"
            disabled={loading}
          />
           <StyledFlexStart>
            <StyledLabel>Password</StyledLabel>
          </StyledFlexStart>
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
          {hasError && 'usuario ja cadastrado' }
          {message}
          <br />
        </StyledForm>
      </div>
    </div>
  );
}