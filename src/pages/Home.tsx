import Button from "../components/Button";
import Header from "../components/Header";
import EventBox from "../components/EventBox";

export const Home = () => {
    return (
      <>
        <Header />
        <div className="flex flex-col justify-center items-center">
          <div className="">Home</div>
          <EventBox />
        </div>
        <Button href = "/" title = "戻る"/>
      </>
    );
  };
