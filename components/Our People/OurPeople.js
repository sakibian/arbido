import Image from "next/image";
import React from "react";
import photo1 from "../../public/assets/images/our-people/photo1.png";
import photo2 from "../../public/assets/images/our-people/photo2.png";
import photo3 from "../../public/assets/images/our-people/photo3.png";
import photo4 from "../../public/assets/images/our-people/photo4.png";
import facebook from "../../public/assets/icons/our-people/facebook.png";
import instagram from "../../public/assets/icons/our-people/instagram.png";
import linkedin from "../../public/assets/icons/our-people/linkedin.png";
import left from "../../public/assets/icons/our-people/left.png";
import right from "../../public/assets/icons/our-people/right.png";
import Link from "next/link";

const OurPeople = () => {
  return (
    <div className="xl:w-[1113px] xl:h-[603px] xl:my-[60px] my-[15px] xl:mx-auto mx-[10px]">
      <h1 className="xl:grid xl:justify-items-end xl:px-[50px] 2xl:mb-[69px] xl:mb-[59px] mb-[10px] 2xl:text-[48px] xl:text-[41px] text-[25px] font-bold font-source">
        <p>
          <span className="text-primary-yellow">People </span>behind the
        </p>
        <p> scenes</p>
      </h1>
      <div className="xl:grid xl:grid-cols-6 xl:gap-[25px] xl:px-4">
        <div className="xl:col-span-2 ">
          <h3 className="2xl:text-[28px] xl:text-[27px] text-[18px] font-source2 2xl:mb-[20px] xl:mb-[18px] mb-[10px] font-extrabold 2xl:leading-[51px] xl:leading-[44px] leading-6">
            Tiara Lyodra
          </h3>
          <h5 className="2xl:text-[15px] xl:text-[14px] font-sintony font-semibold uppercase text-[#222A41] xl:mb-[18px] mb-[8px]">
            Head of Product
          </h5>
          <div className="flex xl:gap-[18px] gap-2 xl:mb-[50px] mb-[30px]">
            <Image src={facebook} alt="Facebook" />
            <Image src={instagram} alt="Instagram" />
            <Image src={linkedin} alt="Linkedin" />
          </div>
          <h5 className="2xl:text-[15px] xl:text-[14px] font-sintony text-[#222A41] 2xl:leading-[24px] xl:leading-[22px] xl:mb-[52px] mb-[10px]">
            Saturday found him for the first time strolling alone through
            zurich, breathing in the heady smell of his freedom. new adventures
            hid around each corner.
            <br />
            <br />
            The future was again a secret. now, what was tiring had disappeared
            and only the beauty remained.
          </h5>
          <Link
            href="#"
            className="xl:flex xl:justify-end xl:items-center 2xl:gap-[20px] xl:gap-[18px] gap-[5px]"
          >
            <Image src={left} alt="" />
            <Image src={right} alt="" />
          </Link>
        </div>
        <div className="xl:col-span-4 xl:block 2xl:block hidden">
          <div className="xl:flex xl:justify-around xl:pr-3">
            <Image
              className="xl:col-span-1 xl:place-self-end"
              src={photo1}
              alt=""
            />
            <Image
              className="xl:col-span-1 xl:place-self-end"
              src={photo2}
              alt=""
            />
            <Image className="xl:col-span-1" src={photo3} alt="" />
            <Image
              className="xl:col-span-1 xl:place-self-end"
              src={photo4}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPeople;
