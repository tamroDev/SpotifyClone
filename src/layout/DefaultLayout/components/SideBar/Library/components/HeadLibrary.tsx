const HeadLibrary = () => {
  return (
    <div className="px-[25px] pt-[18px] pb-[30px] text-[15px] flex justify-between items-center">
      <div className="flex items-center gap-[13px] opacity-80 hover:opacity-100 transition-all cursor-pointer ">
        <div className="w-[24px]">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="Svg-sc-ytk21e-0 bneLcE"
          >
            <path
              d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </div>
        <div className="font-semibold ">Your Library</div>
      </div>
      <div className="cursor-pointer opacity-60 hover:opacity-100 transition-all duration-500">
        <i className="fa-solid fa-plus font-thin"></i>
      </div>
    </div>
  );
};

export default HeadLibrary;
