import { useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'


function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
    console.log("Hello Would");
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate('/signin')
  }

  
    return (
      <>
        <header className="navbar bg-info flex justify-between fixed mt-0 z-30">
        <div className="flex-1"><a className="btn btn-ghost normal-case text-xl font-bold text-white" href="../">アイリス</a></div>
            <button onClick={handleMenuOpen} className={openMenu ? "fixed right-[-100%]" : "btn btn-square btn-ghost z-10"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-10 h-10 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>
            <div onClick={handleMenuOpen} className={openMenu ? "fixed right-0 top-0 h-screen w-screen flex justify-start bg-black bg-opacity-30" : "fixed right-[-100%]"}></div>
            <nav className={openMenu ? "text-left fixed bg-slate-50 right-0 top-0 w-4/12 h-screen flex flex-col justify-start transition duration-500 ease-in-out pt-8 px-3" : "fixed right-[-100%]"}>
              <ul className={openMenu ? "" : "fixed right-[-100%]"}>
                <li className="py-[4vh] text-[2vw] hover:underline"><a onClick={handleLogout}>ログアウト</a></li>
                <li className="py-[4vh] text-[2vw] hover:underline"><a href="../">募集掲示板</a></li>
                <li className="py-[4vh] text-[2vw] hover:underline"><a href="../profile_create">プロフィール</a></li>
                <li className="py-[4vh] text-[2vw] hover:underline"><a href="../myevent_info">マイイベント</a></li>
                <li className="py-[4vh] text-[2vw] hover:underline"><a href="../event_create">イベント作成</a></li>
              </ul>
            </nav>
        </header>
      </>
    )
  }
  
  export default Header
