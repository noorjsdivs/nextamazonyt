import Slider from "react-slick";
import {
  bannerOne,
  bannerTwo,
  bannerThree,
  bannerFour,
  bannerFive,
  bannerSix,
  bannerSeven,
} from "@/public/assets";
import Image from "next/image";
import { CgChevronLeft } from "react-icons/cg";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1 left-1 w-20 h-72 border-2 border-transparent hover:border-black z-10 cursor-pointer flex items-center justify-center duration-300 rounded-md active:shadow-amazonInput"
    >
      <CgChevronLeft className="text-6xl z-10" />
      <CgChevronLeft className="text-6xl absolute left-[12px] text-whiteText" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1 right-1 w-20 h-72 border-2 border-transparent hover:border-black z-10 cursor-pointer flex items-center justify-center duration-300 rounded-md active:shadow-amazonInput"
    >
      <CgChevronLeft className="text-6xl rotate-180 z-10" />
      <CgChevronLeft className="text-6xl rotate-180 absolute right-[12px] text-whiteText" />
    </div>
  );
}
const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="max-w-container mx-auto relative">
      <Slider {...settings}>
        <div>
          <Image src={bannerOne} priority={true} alt="bannerOne" />
        </div>
        <div>
          <Image src={bannerTwo} alt="bannerTwo" />
        </div>
        <div>
          <Image src={bannerThree} alt="bannerThree" />
        </div>
        <div>
          <Image src={bannerFour} alt="bannerFour" />
        </div>
        <div>
          <Image src={bannerFive} alt="bannerFive" />
        </div>
        <div>
          <Image src={bannerSix} alt="bannerSix" />
        </div>
        <div>
          <Image src={bannerSeven} alt="bannerSeven" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
