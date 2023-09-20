import { useAuthContext } from '../context/authContext';
import { auth } from '../firebase';
import { useNavigate, Navigate } from 'react-router-dom'
import Button from "../components/Button";
import Header from "../components/Header";
import EventBox from "../components/EventBox";
import { useState, useEffect } from 'react';

type BoxInfo ={
  id: number;
  title: string;
  representative: string;
  location: string;
  date: string;
  overview: string;
}

export const Home = () => {
  const [BoxArray, setBoxArray] = useState<BoxInfo[]>([
    { id: 1, title: "マラソン大会", representative: "武井壮", location: "スカイツリー", date: "11月11日", overview: "目指せフルマラソン完走" },
    { id: 2, title: "ラジオ体操愛好会", representative: "武井壮", location: "スカイツリー", date: "11月11日", overview: "目指せ健康体" },
    { id: 3, title: "ラジオ体操愛好会", representative: "武井壮", location: "スカイツリー", date: "11月11日", overview: "目指せ健康体" },
  ]);

  useEffect(() => {
    console.log("レンダリング");
  }, []);

  const handleClick = () => {
    console.log("クリックしました");
    setBoxArray((prevState) => ([...prevState, { id: 4, title: "ボディビル研究会", representative: "中山", location: "ゴールド事務", date: "11月11日", overview: "目指せ筋肉" }]));
    console.log(BoxArray);
  }

  const navigate = useNavigate();
  const user = useAuthContext();
  console.log(user?.email)
  const handleLogout = () => {
    auth.signOut();
    navigate('/signin')
  }

  if (!user) {
    return <Navigate to="/signin" />
  } else {
    return (
      <>
        <Header />
        <div className="flex flex-col justify-center items-center pt-[90px]">
          <p className="text-lg">{user.email}</p>
          <button onClick={handleLogout} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Logout</button>
          <div className='text-4xl mt-6'>募集掲示板</div>
          <button onClick={handleClick} className='btn mt-4'>追加</button>
          <div className='w-full flex flex-col justify-center items-center mt-10'>
            {BoxArray.map((box: BoxInfo) => {
              return (
                <EventBox key={box.id} title={box.title} representative={box.representative} location={box.location} date={box.date} overview={box.overview} />
              )
            })}
          </div>
        </div>
        <Button href="/" title="戻る" />
      </>
    );
  }
}
