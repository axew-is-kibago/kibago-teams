import { useAuthContext } from '../context/authContext';
import { auth } from '../firebase';
import { useNavigate, Navigate } from 'react-router-dom'
import Button from "../components/Button";
import Header from "../components/Header";
import EventBox from "../components/EventBox";

type BoxInfo = {
  title: string;
  representative: string;
  location: string;
  date: string;
  overview: string;
};

export const Home = () => {
  const boxes: BoxInfo[] = [
    { title: "マラソンクラブ", representative: "武井壮", location: "スカイツリー", date: "10月15日", overview: "みんなで走りましょう" },
    { title: "水泳クラブ", representative: "武井壮", location: "太平洋", date: "10月16日", overview: "みんなで泳ぎましょう" },
    { title: "二刀流クラブ", representative: "大谷翔平", location: "USA", date: "12月15日", overview: "みんなで二刀流" },
    { title: "なわとびクラブ", representative: "大谷翔平", location: "USA", date: "12月15日", overview: "みんなで二刀流" },
  ];

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
          <button className='btn'>テスト</button>
          {boxes.map((box: BoxInfo) => {
            return(
              <EventBox title={box.title} representative={box.representative} location={box.location} date={box.date} overview={box.overview}/>
            )
          })}
        </div>
        <Button href = "/" title = "戻る" />
      </>
    );
  };
}
