import { useAuthContext } from '../context/authContext';
import { auth } from '../firebase';
import { useNavigate, Navigate } from 'react-router-dom'
import Button from "../components/Button";
import UpButton from "../components/upButton";
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
  const user = useAuthContext();


  const [BoxArray, setBoxArray] = useState<BoxInfo[]>([])
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  useEffect(() => {
    (async() => {
      try {
        const response = await fetch(`/api/GetEvents`);
        const data = await response.json();
        setBoxArray(() => ([...data ]));
        console.log(BoxArray);
      }catch(err) {
        setError(true);
      }finally {
        setLoading(false);
      }
    })()
  }, []);

  if(isLoading) {
    return <p>...loading</p>
  }

  if(isError){
    return <p>Error!</p>
  }  
  
  console.log(user?.email)
  if (!user) {
    return <Navigate to="/signin" />
  } else {
    return (
      <>
        <Header />
        <div className="flex flex-col justify-center items-center pt-[90px]">
          <p className="text-lg">{user.email}</p>
          <div className='text-4xl mt-6'>募集掲示板</div>
          <div className='w-full flex flex-col justify-center items-center mt-10'>
            {BoxArray.map((box: BoxInfo) => {
              return (
                <EventBox key={box.id} title={box.title} representative={box.representative} location={box.location} date={box.date} overview={box.overview} />
              )
            })}
          </div>
        </div>
        <UpButton />
      </>
    );
  }
}