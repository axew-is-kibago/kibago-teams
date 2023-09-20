import ParticipantIcon from "../components/Userbox";
import Button from "../components/Button"
import Header from "../components/Header";


export const Participant = () => {
  return (
    <>
    <Header /> 
      <div className="flex flex-col items-center">

        <div className="flex flex-col items-center w-screen">
          <div className="ml-5 w-1/2 mt-10">
            <div className="text-center text-gray-700 text-xl py-[5vh]" style={{ fontSize: '30px' }}>
              参加者一覧
            </div>
          
            <div>
              <ParticipantIcon /> 
            </div>

            <div>
              <ParticipantIcon /> 
            </div>
            
            <div>
              <ParticipantIcon /> 
            </div>

          </div>
        </div>

        <Button href="/" title="戻る" /> 
        
      </div>
    </>
  );
};
