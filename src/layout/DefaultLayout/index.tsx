import ControlMusic from "./components/ControlMusic/ControlMusic";
import SideBar from "./components/SideBar/SideBar";

const DefaultLayout = () => {
  return (
    <div className="bg-black flex flex-col h-[100vh]">
      <div className="w-[100vw] h-[89%] flex justify-evenly">
        <SideBar />
        <div className="bg-black w-[100%] py-2">
          <div className="w-full h-full bg-[#121212] rounded-lg"></div>
        </div>
      </div>
      <div className="h-[10%] flex items-center">
        <ControlMusic />
      </div>
    </div>
  );
};

export default DefaultLayout;
