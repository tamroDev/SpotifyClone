import ItemSidebar from "./components/ItemSidebar";
import Logo from "./components/Logo";
const HeadSideBar = () => {
  return (
    <div className="rounded-lg w-full h-[25%] bg-[#121212] text-white">
      <Logo />
      <ul className="px-[25px]">
        <ItemSidebar icon={"fa-house"} name={"Home"} />
        <ItemSidebar icon={"fa-magnifying-glass"} name={"Search"} />
      </ul>
    </div>
  );
};

export default HeadSideBar;
