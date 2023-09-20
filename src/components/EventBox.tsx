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
        <div className="flex flex-col border pl-3 border-black w-1/2 h-[400px] rounded">
            <div className="text-[40px]">{title}</div>
            <div className="flex flex-col space-y-1">
                <div className="text-[20px]">代表者：{representative}</div>
                <div className="text-[20px]">場所：{location}</div>
                <div className="text-[20px]">日程：{date}</div>
            </div>
            <label className="text-[20px]">概要:{overview}</label>
            <div className="border border-black w-5/6 h-1/2 text-[20px]">
            概要
            </div>
        </div>
      </>
    )
  }
  
  export default EventBox
