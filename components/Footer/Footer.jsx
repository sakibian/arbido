import React from "react";
import {
	BsLinkedin,
	BsFacebook,
	BsTwitter,
	BsFillEnvelopeFill,
	BsFillTelephoneForwardFill,
} from "react-icons/bs";

const Footer = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 justify-items-start md:justify-items-center bg-[#01E81F]">
			<div className="p-9">
				<h3 className="text-3xl font-bold">Arbido</h3>
				<p className="my-4">
					Funding freemium long tail hypotheses first mover advantage assets
					ownership niche market startup investor.
				</p>
				<p className="flex gap-3 items-center mb-2">
					<BsFillEnvelopeFill /> contact@arbido.com
				</p>
				<p className="flex gap-3 items-center">
					<BsFillTelephoneForwardFill /> +880 1733 323 378
				</p>
			</div>
			<div className=" p-9">
				<h4 className="mb-4 text-3xl font-bold">Services</h4>
				<div className="flex flex-col gap-3">
					<a href="#">Software Development</a>
					<a href="#">App Development</a>
					<a href="#">Web Development</a>
					<a href="#">Digital Marketing</a>
				</div>
			</div>
			<div className="p-9">
				<h4 className="mb-4 text-3xl font-bold">Address</h4>
				<address>123 Lorem Ipsum Street Jakarta, Indonesia</address>
				<div className="flex gap-4 mt-4">
					<a href="#" className="">
						<BsLinkedin className="text-3xl" />
					</a>
					<a href="#">
						<BsFacebook className="text-3xl" />
					</a>
					<a href="#">
						<BsTwitter className="text-3xl" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
