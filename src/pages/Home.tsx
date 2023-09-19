import { useAuthContext } from '../context/authContext';
import { auth } from '../firebase';
import { useNavigate, Navigate } from 'react-router-dom'
import Button from "../components/Button";
import Header from "../components/Header";
import EventBox from "../components/EventBox";

type BoxInfo ={
  id:number;
  title:string;
  representative:string;
  location:string;
  date:string;
  overview:string;
}

export const Home = () => {
  const Boxes:BoxInfo[] = [
    {id: 1,title: "マラソン大会", representative:"武井壮", location: "スカイツリー", date:"11月11日", overview:"目指せフルマラソン完走"},
    {id: 2,title: "ラジオ体操愛好会", representative:"武井壮", location: "スカイツリー", date:"11月11日", overview:"目指せ健康体"},
  ]

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
          {Boxes.map((box: BoxInfo) => {
            return(
              <EventBox key={box.id} title={box.title} representative={box.representative} location={box.location} date={box.date} overview={box.overview}/>
            )
          })}
        </div>
        <Button href = "/" title = "戻る" />
      </>
    );
  }
}
