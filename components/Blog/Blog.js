import Image from "next/image";
import Link from "next/link";
import React from "react";
import blogPhoto from "../../public/assets/images/blog/blogPhoto.png";
import readMore from "../../public/assets/icons/readMore.png";
import blog1 from "../../public/assets/images/blog/blog1.png";
import blog2 from "../../public/assets/images/blog/blog2.bmp";
import blog3 from "../../public/assets/images/blog/blog3.png";
import blog4 from "../../public/assets/images/blog/blog4.png";

const Blog = () => {
  return (
    <div class="xl:w-[1113px] xl:h-[856px] xl:my-[60px] my-[15px] xl:mx-auto mx-[10px]">
      <h1 className="2xl:mb-[69px] xl:mb-[59px] mb-[10px] 2xl:text-[48px] xl:text-[41px] text-[25px] font-bold font-source">
        From our <span className="text-primary-yellow">blog</span>
      </h1>
      <div className="flex 2xl:flex-row xl:flex-row flex-col 2xl:gap-[27px] xl:gap-[23px] gap-[20px]">
        <div className="xl:basis-[57%]">
          <div className="w-full 2xl:mb-[28px] xl:mb-[24px] mb-[12px]">
            <Image src={blogPhoto} alt="Blog Photo" />
          </div>
          <p className="2xl:text-[12px] xl:text-[10px] text-[10px] text-[#AEB7C1] 2xl:mb-[16px] xl:mb-[13px] mb-[8px] font-extrabold uppercase">
            Website design | Thursday, 26 March 2020
          </p>
          <h3 className="2xl:text-[34px] xl:text-[29px] text-[18px] font-source2 2xl:mb-[26px] xl:mb-[22px] mb-[10px] font-extrabold 2xl:leading-[51px] xl:leading-[44px] leading-6">
            I think night-time is dark so you can imagine with less distraction
          </h3>
          <h5 className="2xl:text-[15px] xl:text-[14px] font-sintony text-[#222A41] 2xl:leading-[24px] xl:leading-[22px] xl:mb-[46px] mb-[10px]">
            The engine that gives its mysterious inner life to a work of art
            must be the subterranean expression of a wish, working its way to
            the surface of a narrative. change is an easy panacea. it takes
            character to stay in one…
          </h5>
          <Link
            href="#"
            className="flex justify-end items-center 2xl:gap-[24px] xl:gap-[22px] gap-[10px]"
          >
            <p className="font-source font-bold text-[#FFC700] uppercase 2xl:text-[13px] xl:text-[12px] text-[11px]">
              Read more
            </p>
            <div className="2xl:w-[44px] 2xl:h-[27px] xl:w-[38px] xl:h-[23px] w-[25px] h-[15px]">
              <Image src={readMore} alt="Read More" />
            </div>
          </Link>
        </div>
        <div className="basis-[36%] flex flex-col 2xl:gap-[27px] xl:gap-[23px] gap-[20px]">
          <div className=" flex 2xl:flex-row xl:flex-row flex-col 2xl:gap-[27px] xl:gap-[23px] gap-3">
            <Image
              className="xl:w-[163px]"
              src={blog1}
              alt="First Blog Small Photo"
            />
            <div>
              <p className="uppercase font-extrabold text-xs 2xl:text-[12px] xl:text-[10px] text-[#AEB7C1] 2xl:mb-[20px] xl:mb-[16px] mb-[6px]">
                website development
              </p>
              <h3 className="text-black text-sm font-source font-extrabold 2xl:text-[24px] xl:text-[20px] text-[20px] 2xl:leading-[32px] xl:leading-[27px]">
                The individual is born of nature, but the artist is born of that
                individual
              </h3>
            </div>
          </div>
          <div className="flex 2xl:flex-row xl:flex-row flex-col 2xl:gap-[27px] xl:gap-[23px] gap-3">
            <Image
              className="w-[163px]"
              src={blog2}
              alt="First Blog Small Photo"
            />
            <div>
              <p className="uppercase font-extrabold text-xs 2xl:text-[12px] xl:text-[10px] text-[#AEB7C1] 2xl:mb-[20px] xl:mb-[16px] mb-[6px]">
                Brand Design
              </p>
              <h3 className="text-black text-sm font-source font-extrabold 2xl:text-[24px] xl:text-[20px] text-[20px] 2xl:leading-[32px] xl:leading-[27px]">
                A life without it is like a sunless garden when the flowers are
                dead
              </h3>
            </div>
          </div>
          <div className="flex 2xl:flex-row xl:flex-row flex-col 2xl:gap-[27px] xl:gap-[23px] gap-3">
            <Image
              className="xl:w-[163px]"
              src={blog3}
              alt="First Blog Small Photo"
            />
            <div>
              <p className="uppercase font-extrabold text-xs 2xl:text-[12px] xl:text-[10px] text-[#AEB7C1] 2xl:mb-[20px] xl:mb-[16px] mb-[6px]">
                UI UX Design
              </p>
              <h3 className="text-black text-sm font-source font-extrabold 2xl:text-[24px] xl:text-[20px] text-[20px] 2xl:leading-[32px] xl:leading-[27px]">
                All sorrows can be borne if they can be put into a story
              </h3>
            </div>
          </div>
          <div className="flex 2xl:flex-row xl:flex-row flex-col 2xl:gap-[27px] xl:gap-[23px] gap-3">
            <Image
              className="xl:w-[163px]"
              src={blog4}
              alt="First Blog Small Photo"
            />
            <div>
              <p className="uppercase font-extrabold text-xs 2xl:text-[12px] xl:text-[10px] text-[#AEB7C1] 2xl:mb-[20px] xl:mb-[16px] mb-[6px]">
                Brand Design
              </p>
              <h3 className="text-black text-sm font-source font-extrabold 2xl:text-[24px] xl:text-[20px] text-[20px] 2xl:leading-[32px] xl:leading-[27px]">
                Love is friendship set on fire. certain thoughts are prayers
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
