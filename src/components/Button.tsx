type Props ={
  href: String
};

function Button({href,}:Props) {
    return (
      <>
        <button className="bg-sky-400 text-[27px] px-8 py-2 hover:bg-sky-200 rounded font-bold fixed bottom-3 left-2">{href}</button>
      </>
    )
  }
  
  export default Button