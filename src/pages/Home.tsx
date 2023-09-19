import { useAuthContext } from '../context/authContext';
import { auth } from '../firebase';
import { useNavigate, Navigate } from 'react-router-dom'
export const Home = () => {
  const navigate = useNavigate();
  const user = useAuthContext();
  console.log(user?.email)
  const handleLogout = () =>{
    auth.signOut();
    navigate('/signin')
  }

  if(!user) {
    return <Navigate to="/signin" />
  }else{
    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }
  };
