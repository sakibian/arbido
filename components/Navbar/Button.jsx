import React from "react";

const Button = ({ children, props }) => {
	return (
		<button className="h-14 w-52 bg-black text-white tracking-[5px]">
			{children}
		</button>
	);
};

export default Button;
