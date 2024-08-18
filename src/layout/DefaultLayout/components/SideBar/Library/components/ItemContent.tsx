import { FC } from "react";

interface ItemContentProps {
  title: string;
  description: string;
  create: string;
}

const ItemContent: FC<ItemContentProps> = ({ title, description, create }) => {
  return (
    <div className="w-full h-[30%] min-h-[134px] my-2 px-[20px] py-[16px] bg-[#1f1f1f] rounded-lg flex flex-col justify-between">
      <div className="">
        <h1 className="font-semibold text-[13.5px]">{title}</h1>
        <span className="font-medium text-[12.5px]">{description}</span>
      </div>
      <button className="text-black bg-white text-[13px] font-semibold px-3 py-[6px] rounded-3xl w-max">
        {create}
      </button>
    </div>
  );
};

export default ItemContent;
