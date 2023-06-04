import React from "react";
import { FaDesktop } from "react-icons/fa";

const ServiceCard01 = ({ title, children, icon }) => {
	return (
		<div className="h-full md:h-72 bg-black p-5 md:p-7 flex flex-col md:flex-row relative mx-2 md:ml-16 items-center my-5">
			<div className="bg-[#FFC700] rounded-full h-32 w-32 flex justify-center items-center relative md:absolute left-0 md:-left-16">
				{icon &&
					React.cloneElement(icon, { className: "h-16 w-16 text-white" })}
				{/* <icon className="h-16 w-16 text-white"></icon> */}
			</div>
			<div className=" mx-2 md:ml-20 text-justify">
				<h2 className="text-white text-3xl md:text-[34px] font-semibold md:font-extrabold md:tracking-[1px] mt-5 md:mt-0">
					{title}
				</h2>
				<p className="text-white mt-4">{children}</p>
			</div>
		</div>
	);
};

export default ServiceCard01;
