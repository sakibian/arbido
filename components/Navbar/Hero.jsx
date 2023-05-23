import React from "react";
import Button from "./Button";
import Image from "next/image";
import HeroImage from "../../assests/images/hero-01.jpg";

const Hero = () => {
	return (
		<div className="flex  w-full">
			<div className="bg-[#FFC700] flex flex-col justify-center items-center h-[650px] w-1/2">
				<h2
					className="text-[60px] font-bold mb-8"
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
			{/* <div style={{ height: "650px", width: "100%" }}>
				<Image src={HeroImage} fill alt="hero image" />
			</div> */}
			<div className="w-1/2 relative">
				<div className="absolute inset-0">
					<Image
						src={HeroImage}
						layout="fill"
						objectFit="cover"
						alt="hero image"
					/>
				</div>
				<div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-black opacity-50"></div>
			</div>
		</div>
	);
};

export default Hero;
