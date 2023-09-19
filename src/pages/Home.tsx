import { useAuthContext } from '../context/authContext';
import { auth } from '../firebase';
import { useNavigate, Navigate } from 'react-router-dom'
import Button from "../components/Button";
import Header from "../components/Header";
import EventBox from "../components/EventBox";

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
      <>
        <Header />
        <div className="flex flex-col justify-center items-center">
          <div className="">Home</div>
            <p>{user.email}</p>
            <button onClick={handleLogout}>Logout</button>
          <EventBox />
        </div>
        <Button href = "/" title = "戻る" />
      </>
    );
  };
