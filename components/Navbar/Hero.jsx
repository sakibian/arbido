import React from "react";
import Button from "./Button";
import Image from "next/image";
import HeroImage from "../../assests/images/hero-01.jpg";

const Hero = () => {
	return (
		<div className="flex flex-col lg:flex-row w-full">
			<div className="bg-[#FFC700] flex flex-col p-2 text-center justify-center items-center h-[650px] w-full lg:w-1/2">
				<h2
					className="text-[42px] lg:text-[60px] font-bold mb-8"
					style={{ fontWeight: "900" }}
				>
					Grow Your Brand
					<br />
					Through Digital
				</h2>
				<p className="text-base mb-4 text-center w-3/4">
					If the path is beautiful, let us not ask where it leads. my religion
					is very simple. my religion is kindness. each of us has within our
					power the ability to disrupt
				</p>
				<Button>Learn More</Button>
			</div>
			<div className="w-full lg:w-1/2 relative h-[450px] md:h-[550px] lg:h-[650px]">
				<div className="aspect-w-2 aspect-h-1">
					<Image
						src={HeroImage}
						fill
						style={{
							objectFit: "cover",
							position: "absolute",
						}}
						alt="hero image"
					/>
				</div>

				<div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-black opacity-50"></div>
			</div>
		</div>
	);
};

export default Hero;
