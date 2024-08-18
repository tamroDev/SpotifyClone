const Logo = () => {
  return (
    <div className="flex items-center gap-1 px-[25px] pt-[18px] mb-5 cursor-pointer">
      <i className="fa-brands fa-spotify text-[25px]"></i>
      <div className="font-semibold flex items-center tracking-wide">
        <h1 className="text-[18px]">S</h1>potify
        <p className="text-[10px]">®</p>
      </div>
    </div>
  );
};

export default Logo;
