import ParticipantIcon from "../components/Userbox";
import Button from "../components/Button";
import Header from "../components/Header";

type BoxInfo = {
  id: number;
  name: string;
};


export const Participant = () => {
  const Boxes: BoxInfo[] = [
    { id: 1, name: "John" },
    { id: 2, name: "Steve" },
    { id: 3, name: "Bob" },
    { id: 4, name: "June" },
    { id: 4, name: "June" },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col items-center w-screen">
        <div className="flex flex-col items-center w-full">
          <div className="ml-5 w-full mt-10 flex flex-col items-center">
            <div className="text-gray-700 text-xl py-[5vh]" style={{ fontSize: '30px' }}>
              参加者一覧
            </div>
            <div className='w-1/2'>
              {Boxes.map((box: BoxInfo) => {
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
