import ParticipantIcon from "../components/Userbox";
import Button from "../components/Button";
import Header from "../components/Header";
import { useState, useEffect } from 'react';

type BoxInfo = {
  id: number;
  name: string;
};


export const Participant = () => {
  const [profileArray, setprofileArray] = useState<BoxInfo[]>([
    { id: 1, name: "John" },
    { id: 2, name: "Steve" },
    { id: 3, name: "Bob" },
    { id: 4, name: "June" },
    { id: 5, name: "Pate" },
  ])

  useEffect(() => { console.log("出力テスト"); })

  const handleClick = () => {
    setprofileArray((prevState) => ([...prevState, {id: profileArray.length+1, name: "Jake"}]));
    console.log(profileArray); }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center w-screen">
        <div className="flex flex-col items-center w-full">
          <div className="ml-5 w-full mt-10 flex flex-col items-center">
            <div className="text-gray-700 py-[5vh]" style={{ fontSize: '50px' }}>
              参加者一覧
            </div>
            <div className="w-1/2 text-center"><button onClick={handleClick} className='text-center btn'>追加</button>
              {profileArray.map((box: BoxInfo) => {
                return <ParticipantIcon id={box.id} name={box.name} />;
              })}
            </div>
          </div>
        </div>
        <Button href="/" title="戻る" />
      </div>
    </>
  );
};  