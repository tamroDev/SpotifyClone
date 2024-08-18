import { FC } from "react";
import Button from "../../../../../../components/Button";
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
      <Button name={create} type="white" />
    </div>
  );
};

export default ItemContent;
