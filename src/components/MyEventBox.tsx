type MyEventInfo = {
  title:string;
  representative:string;
  location:string;
  date:string;
  overview:string;
}


function MyEventBox({title, representative, location, date, overview}: MyEventInfo) {
    return (
      <>
        <div className="flex flex-col border pl-3 border-black w-full h-[400px] rounded mb-10">
            <div className="text-[40px] font-bold">{title}</div>
            <div className="flex flex-row space-x-5">
                <div className="text-[20px]">代表者： {representative}</div>
                <div className="text-[20px]">場所： {location}</div>
                <div className="text-[20px]">日程： {date}</div>
            </div>
            <label className="text-[20px]">概要:</label>
            <div className="flex text-[20px] border border-black w-[98%] h-2/3 rounded">
            {overview}
            </div>
        </div>
      </>
    )
  }
  
  export default MyEventBox
