import { FaUser } from 'react-icons/fa'; // Font Awesome

function ParticipantIcon() {
  return (
    <div className="flex items-center rounded border border-black py-2 px-4 bg-white mb-5">
      <FaUser size={80} style={{ marginRight: '10px' }} />
      <div style={{ fontSize: '25px' }}>
        ユーザー名
      </div>
    </div>
  );
}

export default ParticipantIcon;