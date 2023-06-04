import React from "react";
import ServiceCard01 from "./ServiceCard01";
import ServiceCard02 from "./ServiceCard02";
import { FaDesktop, FaDigitalOcean } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Services = () => {
	return (
		<div className="flex flex-col md:flex-row my-10 md:mx-4">
			<div>
				<ServiceCard01 title="Software Development" icon={<FaDesktop />}>
					My first thought about art, as a child, was that the artist brings
					something into the world that did not exist before, and that he does
					it without destroying something else
				</ServiceCard01>
				<ServiceCard01 title="App Development" icon={<FaAppStoreIos />}>
					My first thought about art, as a child, was that the artist brings
					something into the world that did not exist before, and that he does
					it without destroying something else
				</ServiceCard01>
			</div>
			<div>
				<h2 className="text-3xl my-3 md:text-5xl font-extrabold text-center md:text-right mx-2 md:mr-16">
					We are always ready for{" "}
					<span className="text-[#FFC700]">challenges</span>
				</h2>
				<ServiceCard02 title="Web Development" icon={<TbWorldWww />}>
					My first thought about art, as a child, was that the artist brings
					something into the world that did not exist before, and that he does
					it without destroying something else
				</ServiceCard02>
				<ServiceCard02 title="Digital Marketing" icon={<FaDigitalOcean />}>
					My first thought about art, as a child, was that the artist brings
					something into the world that did not exist before, and that he does
					it without destroying something else
				</ServiceCard02>
			</div>
		</div>
	);
};

export default Services;
