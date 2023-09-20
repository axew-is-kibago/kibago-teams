import Button from "../components/Button";
import Header from "../components/Header";
import MyEventBox from "../components/MyEventBox";

export const MyEventInfo = () => {
    return (
      <>
        <Header />
        <div className="pt-[100px]">myevents</div>
        <MyEventBox />
        <Button href = "/home" title = "戻る"/>
      </>
    );
  };


