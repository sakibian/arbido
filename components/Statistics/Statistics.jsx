import React from "react";
import StatCard from "./StatCard";

const Statistics = () => {
	return (
		<div className="flex flex-col md:flex-row justify-center gap-5">
			<StatCard numb={124} details="Completed Projects" />
			<StatCard numb={"99%"} details="Satisfied Clients" />
			<StatCard numb={235} details="Success Campaign" />
			<StatCard numb={1897} details="Cups of Coffee" />
		</div>
	);
};

export default Statistics;
