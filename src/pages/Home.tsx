import { useAuthContext } from '../context/authContext';
import { auth } from '../firebase';
import { useNavigate, Navigate } from 'react-router-dom'
import Button from "../components/Button";
import Header from "../components/Header";
import EventBox from "../components/EventBox";

type BoxInfo = {
  id: number;
  title: string;
  representative: string;
  location: string;
  date: string;
  overview: string;
};

export const Home = () => {
  const boxes: BoxInfo[] = [
    { id: 1, title: "マラソンクラブ", representative: "武井壮", location: "スカイツリー", date: "10月15日", overview: "みんなで走りましょう" },
    { id: 2, title: "水泳クラブ", representative: "武井壮", location: "太平洋", date: "10月16日", overview: "みんなで泳ぎましょう" },
    { id: 3, title: "二刀流クラブ", representative: "大谷翔平", location: "USA", date: "12月15日", overview: "みんなで二刀流" },
    { id: 4, title: "なわとびクラブ", representative: "大谷翔平", location: "USA", date: "12月15日", overview: "みんなで二刀流" },
  ];

  const newbox:BoxInfo = { id: 5, title: "筋トレクラブ", representative: "武井壮", location: "スカイツリー", date: "10月15日", overview: "みんなで走りましょう" };

  const handleClick = () =>{
    console.log("クリック");
    boxes.push(newbox);
    console.log(boxes);
  }

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
          <button onClick={handleClick} className='btn'>テスト</button>
          {boxes.map((box: BoxInfo) => {
            return(
              <EventBox key={box.id} title={box.title} representative={box.representative} location={box.location} date={box.date} overview={box.overview}/>
            )
          })}
        </div>
        <Button href = "/" title = "戻る" />
      </>
    );
  };
}
