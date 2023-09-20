function MyEventBox() {
    return (
      <>
        <div className="flex flex-col border pl-3 border-black w-1/2 h-[400px] rounded mb-10">
            <div className="text-[40px] font-bold">タイトル</div>
            <div className="flex flex-row space-x-5">
                <div className="text-[20px]">代表者：</div>
                <div className="text-[20px]">場所：</div>
                <div className="text-[20px]">日程：</div>
            </div>
            <label className="text-[20px]">概要</label>
            <div className="border border-black w-5/6 h-2/3 text-[20px]">
            </div>
        </div>
      </>
    )
  }
  
  export default MyEventBox
