import { FaUser } from 'react-icons/fa'; // Font Awesome

function ParticipantIcon() {
  return (
    <div className="z-[30]">
      <div className="flex items-center rounded border border-black p-4 mb-8">
        <FaUser className="text-6xl mr-4" />
        <div className="text-3xl">ユーザー名</div>
      </div>
    </div>
  );
}

export default ParticipantIcon;