type EventInfo ={
  title:string;
  representative:string;
  location:string;
  date:string;
  overview:string;
}


function EventBox({title, representative, location, date, overview}: EventInfo) {
    return (
      <>
        <div className="flex flex-col border pl-3 border-black w-1/2 h-[400px] rounded mb-10">
            <div className="text-[40px]">{title}</div>
            <div className="flex flex-col space-y-1">
                <div className="text-[20px]">代表者：{representative}</div>
                <div className="text-[20px]">場所：{location}</div>
                <div className="text-[20px]">日程：{date}</div>
            </div>
            <label className="text-[20px]">概要</label>
            <div className="border border-black w-5/6 h-1/2 text-[20px]">
            {overview}
            </div>
            <div className="flex flex-row w-full justify-end space-x-5 pr-3">
              <button className=" bg-sky-400 text-[20px] w-1/6 py-2 hover:bg-sky-200 rounded mb-3 mt-2 font-bold">参加する</button>
              <button className=" bg-sky-400 text-[20px] w-1/6 py-2 hover:bg-sky-200 rounded mb-3 mt-2 font-bold">一覧</button>
            </div>
        </div>
      </>
    )
  }
  
  export default EventBox
