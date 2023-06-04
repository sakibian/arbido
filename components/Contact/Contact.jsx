// import Image from "next/image";
"use client";
import React from "react";
import Button from "@components/Navbar/Button";
import { useForm } from "react-hook-form";
import Image from "next/image";
import ContactImage from "../../public/assets/images/contact/contact01.png";

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);
	return (
		<main className="md:flex w-full items-center my-10 md:px-4">
			<Image
				src={ContactImage}
				alt="contact now"
				className="hidden md:block w-1/2 py-10 px-10"
			/>
			<section className="w-full md:w-1/2 py-10 px-5 md:px-10 shadow-lg bg-lime-50">
				<div className="text-center mb-10">
					<h1 className="font-bold text-3xl text-gray-900">Contact Now</h1>
					<p>Enter your information to connect</p>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex -mx-3 flex-col md:flex-row">
						<div className="w-full md:w-1/2 px-3 mb-5">
							<label for="" className="text-xs font-semibold px-1">
								First name
							</label>
							<div className="flex">
								<div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
									<i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
								</div>
								<input
									type="text"
									className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
									placeholder="John"
									{...register("firstName", {
										required: true,
										max: 16,
										maxLength: 80,
									})}
								/>
							</div>
						</div>
						<div className="w-full md:w-1/2 px-3 mb-5">
							<label for="" className="text-xs font-semibold px-1">
								Last name
							</label>
							<div className="flex">
								<div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
									<i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
								</div>
								<input
									type="text"
									className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
									placeholder="Smith"
									{...register("lastName", {
										required: true,
										max: 16,
										maxLength: 80,
									})}
								/>
							</div>
						</div>
					</div>
					<div className="flex -mx-3">
						<div className="w-full px-3 mb-5">
							<label for="" className="text-xs font-semibold px-1">
								Email
							</label>
							<div className="flex">
								<div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
									<i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
								</div>
								<input
									type="email"
									className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
									placeholder="johnsmith@example.com"
									{...register("email", { required: true })}
								/>
							</div>
						</div>
					</div>
					<div className="flex -mx-3">
						<div className="w-full px-3 mb-12">
							<label for="" className="text-xs font-semibold px-1">
								Message
							</label>
							<div className="flex">
								<div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
									<i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
								</div>
								<textarea
									className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
									{...register("message", { required: false })}
								/>
							</div>
						</div>
					</div>

					<div className="w-full px-3 mb-5 flex justify-center">
						<Button className="mx-auto">Contact</Button>
					</div>
				</form>
			</section>
		</main>
	);
};

export default Contact;
