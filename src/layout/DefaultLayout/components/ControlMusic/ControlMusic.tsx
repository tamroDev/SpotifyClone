import ActionBox from "./components/ActionBox";

const ControlMusic = () => {
  return (
    <>
      <div className="flex-[70%] h-full flex flex-col justify-center items-end gap-2">
        <ActionBox />
      </div>
      <div className="flex-[30%] h-full"></div>
    </>
  );
};

export default ControlMusic;
