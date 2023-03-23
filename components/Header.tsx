import React, { useEffect } from "react";
import Image from "next/image";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { logo } from "../public/assets/index";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state: any) => state.nextamazon.productData);

  return (
    <div className="w-full bg-amazon_blue text-white sticky top-0 z-50">
      <div className="max-w-container mx-auto px-4 py-3 flex md:justify-between items-center gap-2 md:gap-4 lgl:gap-2 xl:gap-4">
        {/* ============= Image Start here =========== */}
        <Link href="/">
          <div className="headerHover">
            <Image className="w-24 mt-2" src={logo} alt="logoImage" />
          </div>
        </Link>
        {/* ============= Image End here ============= */}
        {/* ============= Deliver Start here ========= */}
        <div className="hidden lgl:inline-flex headerHover">
          <LocationOnOutlinedIcon />
          <p className="flex flex-col text-xs text-lightText font-light">
            Deliver to
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Oman
            </span>
          </p>
        </div>
        {/* ============= Deliver End here =========== */}
        {/* ============= Searchbar Start here ======= */}
        <div className="hidden mdl:inline-flex h-10 rounded-md flex-grow relative">
          <span className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md">
            All{" "}
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </span>

          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        {/* ============= Searchbar End here ========= */}
        {/* ============= SignIn Start here=========== */}
        <div className="flex flex-col items-start justify-center headerHover">
          <div>
            <p className="text-xs text-white font-normal">Hello, sign in</p>
            <p className="flex text-sm font-semibold -mt-1 text-whiteText">
              Accounts & Lists
              <span>
                <ArrowDropDownOutlinedIcon />
              </span>
            </p>
          </div>
        </div>

        {/* ============= SignIn End here ============ */}
        {/* ============= Return Start here ========== */}
        <div className="hidden mdl:flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-white font-normal">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        {/* ============= Return End here ============ */}
        {/* ============= Cart Start here ============ */}
        <Link href="/cart">
          <div className="flex items-start justify-center headerHover relative">
            <ShoppingCartIcon />
            <p className="flex text-xs font-semibold mt-3 text-whiteText">
              Cart
            </p>
            <span className="absolute text-xs top-0 left-6 w-4 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
              {productData.length > 0 ? productData.length : 0}
            </span>
          </div>
        </Link>
        {/* ============= Cart End here ============== */}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
