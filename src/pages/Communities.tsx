export const Comunities = () => {
    return (
      <>
        <div className="text-center text-xl py-[5vh]">イベント作成 (あとで置き換え)</div>
        <div id="wrapper" className="w-2/3 ml-auto mr-auto border-2 rounded mb-[8vh]">
        <div id="input-wrapper" className="w-3/4 ml-auto mr-auto pb-[8vh]">
        <form className="pt-[6vh]"><p className="pb-[2vh]">イベント名<span className="text-red-500 required-dot">*</span></p><input className="border-2 rounded w-full h-[34px]"/></form>
        <form className="pt-[6vh]"><p className="pb-[2vh]">場所<span className="text-red-500 required-dot">*</span></p><input className="border-2 rounded w-full h-[34px]"/></form>
        <form className="pt-[6vh]"><p className="pb-[2vh]">日程<span className="text-red-500 required-dot">*</span></p><input className="border-2 rounded w-full h-[34px]"/></form>
        <form className="pt-[6vh]"><p className="pb-[2vh]">概要<span className="text-red-500 required-dot">*</span></p><textarea className="border-2 rounded w-full h-[25vh]"/></form>
        <div class="buttonContainer" className="pt-[2vh] text-right"><button className="bg-purple-500 text-white rounded p-[1vh] hover:bg-purple-300 px-[1.5vw] py-[1vh]">投稿する</button></div>
        </div>
        </div>
      </>
    );
  };