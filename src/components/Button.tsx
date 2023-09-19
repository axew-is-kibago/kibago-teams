import { useNavigate } from "react-router-dom";
type Props ={
  href: string;
  title: string;
};


function Button({href,title}: Props){
  const navigate = useNavigate()
  const handleClick = ()=>{
    console.log("hello would");
    navigate(href)
  };
    return (
      <>
        <button onClick={handleClick} className="bg-sky-400 text-[27px] px-8 py-2 hover:bg-sky-200 rounded font-bold">{title}</button>
      </>
    )
  }
  
  export default Button
  