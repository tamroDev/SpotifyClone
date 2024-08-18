import Button from "../../../../../components/Button";

const RightHeaderContent = () => {
  return (
    <div className="flex gap-2">
      <Button name="Explore Premium" type="white" />
      <Button name="Install App" type="black" install />
      <div className="p-[8px] bg-black rounded-full hover:scale-[1.1] transition-all duration-200">
        <button className="w-[16px] flex justify-center items-center">
          <i className="fa-regular fa-bell text-[#878787]"></i>
        </button>
      </div>
      <div className="p-[8px] bg-black rounded-full hover:scale-[1.1] transition-all duration-200">
        <button className="w-[16px] flex justify-center items-center">
          <i className="fa-regular fa-user text-[#878787]"></i>
        </button>
      </div>
    </div>
  );
};

export default RightHeaderContent;
