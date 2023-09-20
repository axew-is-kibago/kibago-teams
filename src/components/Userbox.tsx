import { FaUser } from 'react-icons/fa'; // Font Awesome
import { useNavigate } from "react-router-dom";

type UserInfo = {
  id: number;
  name: string;
};

function ParticipantIcon({ id, name }: UserInfo) {
  const navigate = useNavigate();

  const handleClick = () =>{
    console.log("クリック");
    navigate("/profile")
  }

  return (
    <div onClick={handleClick} className="z-[30]">
      <div className="w-full flex items-center rounded border border-black mb-4 p-4">
        <FaUser className="text-6xl mr-4" />
        <div className="text-3xl">ID : {id}</div>
        <div className="text-3xl ml-4">NAME : {name}</div>
      </div>
    </div>
  );
}

export default ParticipantIcon;
