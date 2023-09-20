import { useEffect, useState } from "react";
import { IconContext } from "react-icons"
import { RiArrowUpSLine } from "react-icons/ri";

function UpButton() {
  // 表示切り替えフラグ
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // スクロールイベントをListen
  useEffect(() => {
    window.addEventListener("scroll", watchScroll);
    return () => {
      window.removeEventListener("scroll", watchScroll);
    };
  }, []);

  // Scrollを検知しボタン表示のフラグを切り替え
  const watchScroll = () => {
    const basePosition = 200;
    const scrollPosition = window.scrollY;
    setShowScrollToTop(basePosition <= scrollPosition);
  };

  return (
    <div>
      {showScrollToTop && (
        <span
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="scroll-to-top fixed bottom-3 right-2 rounded-full h-[56px] w-[56px] bg-sky-400 hover:bg-sky-200"
        ><IconContext.Provider value={{ color: "#fff", size: "56px"}}><RiArrowUpSLine /></IconContext.Provider>
        </span>
      )}
    </div>
  );
};

export default UpButton;
