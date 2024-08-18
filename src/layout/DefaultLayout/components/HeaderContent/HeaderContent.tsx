import NavigationControls from "./components/NavigationControls";
import RightHeaderContent from "./components/RightHeaderContent";

const HeaderContent = () => {
  return (
    <header className="h-[10%] w-full flex justify-between items-center px-3 transition-colors duration-300">
      <NavigationControls />
      <RightHeaderContent />
    </header>
  );
};

export default HeaderContent;
