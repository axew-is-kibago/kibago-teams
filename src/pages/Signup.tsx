import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from '../firebase.ts';
export const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await signInWithEmailAndPassword(auth, email, password)
    console.log("User: ", user);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }
    return (
      <div>
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
        </form>
      </div>
    );
  };
