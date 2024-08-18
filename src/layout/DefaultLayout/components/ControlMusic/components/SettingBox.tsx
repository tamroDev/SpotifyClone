const SettingBox = () => {
  return (
    <div className="w-full h-full flex items-center justify-end pr-4">
      <div className="p-[8px]">
        <button className="w-[16px] flex">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
          >
            <path fill="#363636" d="M11.196 8 6 5v6l5.196-3z"></path>
            <path
              fill="#363636"
              d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="p-[8px]">
        <button className="w-[16px] flex hover:scale-[1.1] transition-all duration-500">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
          >
            <path
              fill="#f1f1f1"
              d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="p-[8px]">
        <button className="w-[16px] flex hover:scale-[1.1] transition-all duration-500">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
          >
            <path
              fill="#f1f1f1"
              d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"
            ></path>
            <path
              fill="#f1f1f1"
              d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="p-[8px]">
        <button className="w-[16px] flex hover:scale-[1.1] transition-all duration-500">
          <svg
            data-encore-id="icon"
            role="presentation"
            aria-label="Volume high"
            aria-hidden="true"
            id="volume-icon"
            viewBox="0 0 16 16"
          >
            <path
              fill="#f1f1f1"
              d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"
            ></path>
            <path
              fill="#f1f1f1"
              d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="bg-white h-[3px] rounded-lg w-[21%]"></div>
      <div className="p-[8px]">
        <button className="w-[16px] flex hover:scale-[1.1] transition-all duration-500">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
          >
            <path
              fill="#363636"
              d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SettingBox;
