import { FaUser } from 'react-icons/fa'; // Font Awesome

function ParticipantIcon() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    border: '2px solid black',
    padding: '10px',
    marginBottom: '20px', 
    zIndex: 0,
  };

  const iconStyle = {
    fontSize: '80px', 
  };

  const usernameStyle = {
    fontSize: '25px',
  };

  return (
    <div style={containerStyle}>
      <FaUser style={iconStyle} />
      <div style={usernameStyle}>ユーザー名</div>
    </div>
  );
}

export default ParticipantIcon;
