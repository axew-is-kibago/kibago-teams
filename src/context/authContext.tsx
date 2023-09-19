import { User } from 'firebase/auth';
import { createContext, useContext, useState ,PropsWithChildren, useEffect} from 'react';
import { auth } from '../firebase';

const AuthContext = createContext<User | null>(null);

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }:PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      console.log(user)
      setUser(user);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}