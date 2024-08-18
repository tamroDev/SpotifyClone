import ControlMusic from "./components/ControlMusic/ControlMusic";
import HeaderContent from "./components/HeaderContent/HeaderContent";
import SideBar from "./components/SideBar/SideBar";

const DefaultLayout = () => {
  return (
    <div className="bg-black flex flex-col h-[100vh]">
      <div className="w-[100vw] h-[89%] flex justify-evenly">
        <SideBar />
        <div className="bg-black w-[100%] py-2 pr-1">
          <div className="w-full h-full bg-custom-gradient rounded-lg overflow-auto">
            <HeaderContent />
            <div className="w-full h-[90%] overflow-auto customScroll p-2"></div>
          </div>
        </div>
      </div>
      <div className="h-[10%] flex items-center">
        <ControlMusic />
      </div>
    </div>
  );
};

export default DefaultLayout;
