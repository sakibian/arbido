import Image from "next/image";
import React from "react";

const Portfolio = () => {
	return (
		<div className="my-10 md:mx-4">
			<div>
				<h2 className="text-3xl my-3 md:text-5xl font-extrabold text-center md:text-left mx-2">
					Our recent
					<span className="text-[#FFC700] mx-4">projects</span>
				</h2>
				<div className="border-b-8 border-[#FFC700] mx-auto md:ml-4 w-60 mt-4"></div>
			</div>
			<div>
				<div>
					<h3>Website development for Digital Company</h3>
					<p>
						My first thought about art, as a child, was that the artist brings
						something into the world that did not exist before, and that he does
						it without destroying something else
					</p>
					<div>
						<Image alt="portfolio-webdevelopment"></Image>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
