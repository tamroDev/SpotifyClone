const NavigationControls = () => {
  return (
    <div className="flex gap-3">
      <div className="p-[8px] bg-[#0a0a0a] rounded-full">
        <button className="w-[16px] flex">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
          >
            <path
              fill="#fff"
              d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="p-[8px] bg-[#0a0a0a] rounded-full">
        <button className="w-[16px] flex">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
          >
            <path
              fill="#fff"
              d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavigationControls;
