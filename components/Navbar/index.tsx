"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";
import data from "../data";

const Publications = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { menu } = data;

	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<nav className="fixed z-10 w-full px-6 py-2 text-lg bg-gray-950 text-gray-400">
			<div className="flex justify-between items-center">
				<a
					href="https://www.linkedin.com/in/arpana-mishra-181b6a146/"
					target="_blank"
				>
					<BsLinkedin className="text-2xl font-semibold" />
				</a>

				<div className="hidden md:block">
					<ul className="flex align-center gap-5">
						{menu.map((el, i) => (
							<li key={i}>
								<a href={el.link} className="hover:text-white text-l">
									{el.text}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="md:hidden" onClick={toggleMenu}>
					<GiHamburgerMenu />
				</div>
				<div
					className={`${
						isOpen ? "translate-x-0" : "-translate-x-full"
					} md:hidden z-11 absolute top-0 right-0 w-full h-screen px-12 py-70 text-white text-2xl bg-black bg-opacity-90 flex flex-col transition-transform duration-300 ease-in-out`}
				>
					<div className="flex justify-end">
						<div
							className="mt-3 -mr-7"
							onClick={(e) => {
								e.stopPropagation();
								toggleMenu();
							}}
						>
							<CgClose />
						</div>
					</div>
					<ul
						className="flex flex-col align-center justify-center gap-5 w-full text-center h-full"
						onClick={(e) => {
							e.stopPropagation();
							toggleMenu();
						}}
					>
						{menu.map((el, i) => (
							<li key={i} className="hover:text-white text-xl">
								<a href={el.link} className="hover:text-white text-xl">
									{el.text}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Publications;
