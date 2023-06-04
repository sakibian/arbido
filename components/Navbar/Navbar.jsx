"use client";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
	// const [navbarOpen, setNavbarOpen] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	return (
		<div className={`w-full xl:grid xl:place-items-center`}>
			<nav className="  lg:flex lg:items-center xl:container">
				<div className="flex">
					<a className="m-4 text-2xl font-bold" href="#home">
						Arbido
					</a>
					<button
						className="px-4 my-2 mx-4 ml-auto   lg:hidden"
						onClick={() => setShowMobileMenu(!showMobileMenu)}
					>
						{showMobileMenu ? (
							<RxCross1 className="h-8 w-8 "></RxCross1>
						) : (
							<CiMenuFries className="h-8 w-8 "></CiMenuFries>
						)}
					</button>
				</div>
				<ul
					className={
						(showMobileMenu ? "" : "hidden") +
						` lg:ml-auto lg:items-center lg:flex bg-[#FFC700] absolute lg:relative justify-end min-h-full w-full lg:bg-white`
					}
				>
					<li className="py-2 grid place-items-center lg:mx-2 ">
						<a
							href="/services"
							className="p-2 w-1/2 lg:w-28 text-center rounded font-bold"
						>
							Services
						</a>
					</li>

					<li className="py-2 grid place-items-center lg:mx-2">
						<a
							href="/about"
							className="p-2 w-1/2 lg:w-28 text-center rounded font-bold"
						>
							About
						</a>
					</li>

					<li className="py-2 grid place-items-center lg:mx-2">
						<a
							href="/blog"
							className="p-2 w-1/2 lg:w-28 text-center rounded font-bold"
						>
							Blog
						</a>
					</li>
					<li className="py-2 grid place-items-center lg:mx-2">
						<a
							href="/contact"
							className="p-2 w-1/2 lg:w-28 text-center rounded font-bold"
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
