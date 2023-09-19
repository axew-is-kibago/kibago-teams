import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useAuthContext } from "../context/authContext.tsx";
import { auth } from '../firebase.ts';
import { Link, useNavigate } from "react-router-dom";

// import { useAuthContext } from "../context/authContext.tsx";
export const SignUp = () => {
  const navigate = useNavigate();
  const user = useAuthContext();
  const [error, setError] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const user = await createUserWithEmailAndPassword(auth, email, password)
      navigate('/');
      console.log("User: ", user);
    }catch(error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
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
          <h1>User{ user?.email }</h1>
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
            <button type="submit">Regist</button>
          </div>
          <div>
            User Singin is <Link to={'/signin'}>Here...</Link>
          </div>
        </form>
      </div>
    );
  };
