import { Link } from "react-router-dom";
import { FC } from "react";

interface ItemSidebarProps {
  name: string;
  icon: string;
}

const ItemSidebar: FC<ItemSidebarProps> = ({ name, icon }) => {
  return (
    <Link
      to="/"
      className="flex items-center gap-5 mb-[23px] opacity-70 hover:opacity-100 transition-all duration-400 cursor-pointer"
    >
      <i className={`fa-solid ${icon} text-[20px]`}></i>
      <h1 className="font-semibold text-[15px]">{name}</h1>
    </Link>
  );
};

export default ItemSidebar;
