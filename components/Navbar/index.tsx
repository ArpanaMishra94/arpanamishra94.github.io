"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<nav className="fixed z-10 w-full px-6 py-2 text-lg tracking-wide bg-gray-950 text-gray-400">
			<div className="flex justify-between items-center">
				<a
					href="https://www.linkedin.com/in/arpana-mishra-181b6a146/"
					target="_blank"
				>
					<BsLinkedin className="text-2xl font-semibold" />
				</a>

				<div className="hidden md:block">
					<ul className="flex align-center gap-8">
						<li>
							<a
								href="#banner"
								className="hover:text-white text-xl font-medium"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#aboutMe"
								className="hover:text-white text-xl font-medium"
							>
								Research & Publications
							</a>
						</li>
						<li>
							<a
								href="#skills"
								className="hover:text-white text-xl font-medium"
							>
								Teaching
							</a>
						</li>
						<li>
							<a href="#links" className="hover:text-white text-xl font-medium">
								Important Links
							</a>
						</li>
						<li>
							<a
								href="#contact"
								className="hover:text-white text-xl font-medium"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div className="md:hidden" onClick={toggleMenu}>
					<GiHamburgerMenu />
				</div>
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
					<li>
						<a href="#banner" className="hover:text-white text-xl">
							Home
						</a>
					</li>
					<li>
						<a href="#aboutMe" className="hover:text-white text-xl">
							About
						</a>
					</li>
					<li>
						<a href="#skills" className="hover:text-white text-xl">
							Skills
						</a>
					</li>
					<li>
						<a href="#projects" className="hover:text-white text-xl">
							Projects
						</a>
					</li>
					<li>
						<a href="#contact" className="hover:text-white text-xl">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
