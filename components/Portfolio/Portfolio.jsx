import Image from "next/image";
import React from "react";
import Portfolio01 from "../../public/assets/images/Portfolio/portfolio-01.png";
import Portfolio02 from "../../public/assets/images/Portfolio/porfolio03.PNG";
import Portfolio03 from "../../public/assets/images/Portfolio/porfolio02.PNG";
import ShapeCircle from "../../public/assets/icons/shape/rounded-shape-01.png";

const Portfolio = () => {
	return (
		<div className="my-10 md:mx-4 min-h-screen relative ">
			<Image
				src={ShapeCircle}
				alt=""
				height={450}
				className="absolute -z-10 mt-10 hidden md:block"
			/>
			<div>
				<h2 className="text-3xl mt-32 my-3 md:text-5xl font-extrabold text-center md:text-left">
					Our recent
					<span className="text-[#FFC700] mx-4">projects</span>
				</h2>
				<div className="border-b-8 border-[#FFC700] mx-auto md:ml-3 w-60 mt-4 mb-20"></div>
			</div>
			<div className="my-10 p-2">
				<h3 className="text-3xl md:text-4xl font-semibold text-center md:text-left">
					Website Development for <br />
					Digital Company
				</h3>
				<p className="md:w-1/2 p-1 md:p-0 my-6">
					My first thought about art, as a child, was that the artist brings
					something into the world that did not exist before, and that he does
					it without destroying something else
				</p>
			</div>
			<div className="flex flex-col md:flex-row gap-0 md:gap-5 p-1 md:p-0 justify-around items-center">
				<div className="w-full md:w-1/2">
					<div className="">
						<Image
							src={Portfolio01}
							height={500}
							alt="portfolio-webdevelopment"
							className="float-right mb-6 md:mb-0"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-8 relative">
					<Image
						src={Portfolio03}
						width={600}
						height={500}
						alt="portfolio-app-development"
						className="shadow-lg"
					/>
					<Image
						src={Portfolio02}
						width={600}
						height={500}
						alt="portfolio-webdevelopment"
						className="shadow-md"
					/>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
