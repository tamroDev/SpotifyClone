import { FC } from "react";

type Button = {
  name: string;
  type: string;
  install?: boolean;
};

const Button: FC<Button> = ({ name, type, install }) => {
  if (type === "black") {
    return (
      <button className=" hover:scale-[1.1] transition-all duration-200 text-white bg-black text-[13px] font-semibold px-3 py-[6px] rounded-3xl w-max flex items-center justify-between gap-2">
        {install && (
          <span className="w-[16px] flex">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path
                fill="#FFFFFF"
                d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"
              ></path>
              <path
                fill="#FFFFFF"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"
              ></path>
            </svg>
          </span>
        )}
        {name}
      </button>
    );
  }
  return (
    <button className=" hover:scale-[1.1] transition-all duration-200 text-black bg-white text-[13px] font-semibold px-3 py-[6px] rounded-3xl w-max">
      {name}
    </button>
  );
};

export default Button;
