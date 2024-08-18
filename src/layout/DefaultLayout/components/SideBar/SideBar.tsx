import HeadSideBar from "./HeadSideBar/HeadSideBar";
import Library from "./Library/Library";

const SideBar = () => {
  return (
    <div className="bg-black w-[420px] min-w-[420px] h-full p-2 flex flex-col gap-2">
      <HeadSideBar />
      <Library />
    </div>
  );
};

export default SideBar;
