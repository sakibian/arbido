import React from "react";
import Button from "./Button";
import Image from "next/image";
import HeroImage from "../../assests/images/hero-01.jpg";

const Hero = () => {
	return (
		<div className="flex justify-center items-center w-full">
			<div className="bg-[#FFC700] flex-col justify-center items-center h-[650px] w-1/2">
				<h2
					className="text-[60px] font-bold mb-8"
					style={{ fontWeight: "900" }}
				>
					Grow your brand
					<br />
					through digital
				</h2>
				<p className="text-base mb-4">
					If the path is beautiful, let us not ask where it leads. my religion
					is very simple. my religion is kindness. each of us has within our
					power the ability to disrupt
				</p>
				<Button>Learn More</Button>
			</div>
			<div>
				<img src={HeroImage} />
			</div>
		</div>
	);
};

export default Hero;
