import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from '../firebase.ts';
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const user = await signInWithEmailAndPassword(auth, email, password)
      console.log("User: ", user);
      navigate('/');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      }
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }
    return (
      <div>
        <h1>Login Page</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
              type="email"
              />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input
              id="password"
              name="password"
              value={password}
              onChange={handleChangePassword}
              type="password"
              />
          </div>
          <div>
            <button type="submit">Signin</button>
          </div>
          <div>
            User regist is <Link to={'/signup'}>Here...</Link>
          </div>
        </form>
      </div>
    );
  };
