import { useAuthContext } from '../context/authContext';
import ParticipantIcon from "../components/Userbox";
import Button from "../components/Button";
import Header from "../components/Header";
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

type BoxInfo = {
  id: number;
  fb_uid: string;
  sex: string;
  weight: number;
  height: number;
  target: string;
};


export const Participant = () => {
  const user = useAuthContext();

  const [profileArray, setProfileArray] = useState<BoxInfo[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    (async() => {
      try {
        const response = await fetch(`/api/GetProfile`);
        const info = await response.json();
        setProfileArray(() => ([...info ]));
        console.log(profileArray);
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

  if(!user){
    return <Navigate to="/signin"/>
  } else{
    return (
      <>
        <Header />
        <div className="flex flex-col items-center w-screen">
          <div className="flex flex-col items-center w-full">
            <div className="ml-5 w-full mt-10 flex flex-col items-center">
              <div className="text-gray-700 py-[5vh]" style={{ fontSize: '50px' }}>
                参加者一覧
              </div>
              <div className="w-1/2 text-center">
                {profileArray.map((box: BoxInfo) => {
                  return <ParticipantIcon key={box.id} name={box.fb_uid} sex={box.sex} weight={box.weight} height={box.height} target={box.target} />;
                })}
              </div>
            </div>
          </div>
          <Button href="/" title="戻る" />
        </div>
      </>
    );
  }
};  