import React from "react";

const StatCard = ({ numb, details }) => {
	return (
		<div className="h-60 w-full md:w-80 bg-black hover:text-black flex flex-col items-center justify-center hover:bg-[#ffc600]">
			<h3 className="text-green-500 text-6xl font-semibold ">{numb}</h3>
			<p className="text-white mt-3 text-3xl">{details}</p>
		</div>
	);
};

export default StatCard;
