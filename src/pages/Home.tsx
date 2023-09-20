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
    {id: 1, title: "マラソン大会", representative:"武井壮", location: "スカイツリー", date:"11月11日", overview:"目指せフルマラソン完走"},
    {id: 2, title: "ラジオ体操愛好会", representative:"武井壮", location: "スカイツリー", date:"11月11日", overview:"目指せ健康体"},
    {id: 3, title: "ラジオ体操愛好会", representative:"武井壮", location: "スカイツリー", date:"11月11日", overview:"目指せ健康体"},
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
        <div className="flex flex-col justify-center items-center pt-[90px]">
          <p>{user.email}</p>
          <button onClick={handleLogout}>Logout</button>
          <div className='text-[60px]'>募集掲示板</div>
          <div className='w-screen flex flex-col justify-center items-center mt-10'>
            {Boxes.map((box: BoxInfo) => {
              return(
                <EventBox key={box.id} title={box.title} representative={box.representative} location={box.location} date={box.date} overview={box.overview}/>
              )
            })}
          </div>
        </div>
        <Button href = "/" title = "戻る" />
      </>
    );
  }
}
