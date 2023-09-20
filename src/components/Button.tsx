import { ComponentPropsWithoutRef } from "react";
import { useNavigate } from "react-router-dom";
type Props ={
  type?: ComponentPropsWithoutRef<'button'>['type']
  href: string;
  title: string;
};


function Button({type,href,title}: Props){
  const navigate = useNavigate()
  const handleClick = ()=>{
    console.log("hello would");
    navigate(href)
  };
    return (
      <>
        <button type={type} onClick={handleClick} className="-z-50 bg-sky-400 text-[27px] px-8 py-2 hover:bg-sky-200 rounded font-bold fixed bottom-3 left-2">{title}</button>
      </>
    )
  }
  
  export default Button