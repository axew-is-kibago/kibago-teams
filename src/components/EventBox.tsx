function EventBox() {
    return (
      <>
        <div className="flex flex-col border pl-3 border-black w-1/2 h-[400px] rounded">
            <div className="text-[40px]">イベント名</div>
            <div className="flex flex-col space-y-1">
                <div className="text-[20px]">代表者：</div>
                <div className="text-[20px]">場所：</div>
                <div className="text-[20px]">日程：</div>
            </div>
            <label className="text-[20px]">概要:</label>
            <div className="border border-black w-5/6 h-1/2 text-[20px]">
            概要
            </div>
        </div>
      </>
    )
  }
  
  export default EventBox
