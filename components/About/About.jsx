import React from "react";
import HorizontalShape from "../../public/assets/icons/shape/horizontal-shape.png";
import People from "../../public/assets/icons/our-people/team01.png";
import Image from "next/image";
import Button from "@components/Navbar/Button";

const About = () => {
	return (
		<div className="my-10 md:mx-4">
			<div>
				<h2 className="text-3xl mt-20 mb-3 md:text-5xl font-extrabold text-center md:text-left">
					About Us
				</h2>
				<div className="border-b-8 border-[#FFC700] mx-auto md:m-0 w-36 md:w-44 mt-4 mb-8"></div>
			</div>
			<div className="flex flex-col-reverse md:flex-row justify-center items-center">
				<div className="w-full md:w-1/2">
					<Image src={People} alt="about us" className="mx-auto p-10" />
				</div>
				<div className="w-full md:w-1/2">
					<h2 className="text-3xl md:text-4xl font-extrabold text-center md:text-left">
						The thing about us is,
						<br />
						<span className="text-[#FFC700]">we think big</span>
					</h2>
					<p className="my-7 p-2 md:p-0">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
						ipsa iure nisi labore quo velit ex dicta atque? Rem itaque culpa, id
						quas neque nemo odit laboriosam voluptatem molestias eaque explicabo
						cum eos maxime assumenda aliquam quisquam obcaecati tenetur
						consequuntur.
					</p>
					<div className="flex justify-center md:justify-start">
						<Button>Contact Now</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
