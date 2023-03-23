import MenuIcon from "@mui/icons-material/Menu";

const HeaderBottom = () => {
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li className="flex items-center gap-1 headerHover">
          <MenuIcon />
          All
        </li>
        <li className="hidden md:inline-flex headerHover">
          Today&apos;s Deals
        </li>
        <li className="hidden md:inline-flex headerHover">Customer Service</li>
        <li className="hidden md:inline-flex headerHover">Gift Cards</li>
        <li className="hidden md:inline-flex headerHover">Registry</li>
        <li className="hidden md:inline-flex headerHover">Sell</li>
      </ul>
    </div>
  );
};

export default HeaderBottom;
