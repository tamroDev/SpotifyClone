import HeadLibrary from "./components/HeadLibrary";
import ItemContent from "./components/ItemContent";

const Library = () => {
  return (
    <div className="h-[75%] w-full !rounded-lg bg-[#121212] text-white pb-2 overflow-hidden">
      <div className="h-[10%]">
        <HeadLibrary />
      </div>
      <div className=" w-full h-[90%] px-[10px] pt-[18px] pb-[30px] ">
        <div className="h-full flex flex-col gap-2 max-h-[450px] overflow-auto customScroll">
          <ItemContent
            title={"Create your first playlist"}
            description={"It's easy, we'll help you"}
            create={"Create playlist"}
          />
          <ItemContent
            title={"Let's find some podcasts to follow"}
            description={"We'll keep you updated on new episodes"}
            create={"Browse podcasts"}
          />
        </div>
      </div>
    </div>
  );
};

export default Library;
