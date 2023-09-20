import Button from "../components/Button";
import UpButton from "../components/upButton";
import Header from "../components/Header";
import MyEventBox from "../components/MyEventBox";
import { useState, useEffect } from 'react';

type MyEventInfo = {
  id:number;
  title:string;
  representative:string;
  location:string;
  date:string;
  overview:string;
}

export const MyEventInfo = () => {
  const [myEventArray, setMyEventArray] = useState<MyEventInfo[]>([
    {id: 1, title: "パン食い競争", representative:"eat_bread", location: "どこかの小学校", date:"01月23日", overview:"ノーマルなイベントです"},
    {id: 2, title: "二重跳びギネス記録チャレンジ", representative:"challenger", location: "スカイツリーの頂点", date:"02月13日", overview:"ぎりぎりノーマルなイベントです"},
    {id: 3, title: "人間の限界を超えろ", representative:"space", location: "飛行機の上", date:"11月11日", overview:"おかしいイベントです"},
  ])

  useEffect(() => { console.log("出力テスト"); })

  const handleClick = () => {
    setMyEventArray((prevState) => ([...prevState, {id: myEventArray.length+1, title: "ボディビル研究会" + String(myEventArray.length-2), representative:"中山", location: "ゴールド事務", date:"11月11日", overview:"目指せ筋肉"}]));
    console.log(myEventArray);
  }


    return (
      <>
        <Header />
        <div className="w-2/3 ml-auto mr-auto rounded mb-[8vh]">
        <div className="w-3/4 ml-auto mr-auto pb-[8vh]">
        <div className="pt-[100px] text-center">myevents</div>
        <div className="text-center mt-5"><button onClick={handleClick} className='text-center btn'>追加</button></div>
        <div className='w-screen flex flex-col justify-center items-center mt-10'></div>
          {myEventArray.map((myevent: MyEventInfo) => {
            return(
              <MyEventBox key={myevent.id} title={myevent.title} representative={myevent.representative} location={myevent.location} date={myevent.date} overview={myevent.overview}/>
            )
          })}
        </div>
        </div>
        <Button href = "/home" title = "戻る"/>
        <UpButton />
      </>
    );
  };
