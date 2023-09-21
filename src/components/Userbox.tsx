import { FaUser } from 'react-icons/fa'; // Font Awesome
import { useNavigate } from "react-router-dom";

type UserInfo = {
  name: string;
  sex: string;
  weight: number;
  height: number;
  target: string;
};

function ParticipantIcon({ name, sex, weight, height, target }: UserInfo) {
  const navigate = useNavigate();

  const handleClick = () =>{
    console.log("クリック");
    navigate("/profile")
  }

  return (
    <div onClick={handleClick} className="z-[30]">
      <div className="w-full flex items-center rounded border border-black mb-4 p-4">
        <FaUser className="text-6xl mr-4" />
        <div className="text-2xl ml-4">名前 : {name}</div>
        {/* <div className="text-3xl ml-4">性別 : {sex}</div>
        <div className="text-3xl ml-4">体重 : {weight}</div>
        <div className="text-3xl ml-4">身長 : {height}</div>
        <div className="text-3xl ml-4">目標 : {target}</div> */}
      </div>
    </div>
  );
}

export default ParticipantIcon;
