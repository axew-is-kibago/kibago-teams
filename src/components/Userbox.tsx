import { FaUser } from 'react-icons/fa'; // Font Awesome

type UserInfo = {
  id: number;
  name: string;
};

function ParticipantIcon({id, name}: UserInfo) {
  return (
    <div className="z-[30]">
      <div className="flex items-center rounded border border-black mb-8 h-[100px]">
        <FaUser className="text-6xl mr-4" />
        <div className="text-3xl">ID : {id}</div>
        <div className="text-3xl">NAME : {name}</div>
        </div>
      </div>
      );
}

export default ParticipantIcon;