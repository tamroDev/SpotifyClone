const ActionBox = () => {
  return (
    <>
      <div className="w-[55%] flex gap-5 justify-center">
        <button>
          <span aria-hidden="true" className="w-[18px] flex">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path
                fill="#363636"
                d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"
              ></path>
              <path
                fill="#363636"
                d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"
              ></path>
            </svg>
          </span>
        </button>
        <button>
          <span className="w-[18px] flex">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path
                fill="#363636"
                d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"
              ></path>
            </svg>
          </span>
        </button>
        <button
          data-testid="control-button-playpause"
          aria-label="Pause"
          data-encore-id="buttonPrimary"
          data-is-icon-only="true"
        >
          <span className="w-[32px] h-[32px] rounded-full bg-[#4d4d4d] flex justify-center items-center">
            <span aria-hidden="true" className="w-[18px] flex">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#00000"
                  d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"
                ></path>
              </svg>
            </span>
          </span>
        </button>
        <button
          data-testid="control-button-skip-forward"
          aria-label="Next"
          data-encore-id="buttonTertiary"
        >
          <span aria-hidden="true" className="w-[18px] flex">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path
                fill="#363636"
                d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"
              ></path>
            </svg>
          </span>
        </button>
        <button
          data-testid="control-button-repeat"
          role="checkbox"
          aria-checked="false"
          aria-label="Disable repeat"
          data-encore-id="buttonTertiary"
        >
          <span aria-hidden="true" className="w-[18px] flex">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path
                fill="#363636"
                d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      <div className="w-[55%] h-[20px] flex justify-center items-center gap-2">
        <div className="w-[7%] text-[12px] flex items-center justify-end text-[#858585] font-bold">
          -:--
        </div>
        <div className="flex items-center justify-center w-[85%] h-full">
          <div className="h-[3px] w-[100%] rounded-xl bg-[#4d4d4d]"></div>
        </div>
        <div className="w-[7%] text-[12px] flex items-center justify-start text-[#858585] font-bold">
          --:-
        </div>
      </div>
    </>
  );
};

export default ActionBox;
