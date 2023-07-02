/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import data from "../data";

const Banner = () => {
	return (
		<div
			id="banner"
			className="wrapper flex flex-col md:flex-row items-center gap-10"
		>
			<div className="w-44 h-44">
				<img
					className="w-full h-full rounded-full border-[1px] border-white-700 p-2 object-cover"
					src="/Img/profileImg.jpg"
					alt="profileImg"
				/>
			</div>
			<div className="w-3/4 flex flex-col items-center md:items-start gap-2">
				<h1 className=" text-2xl md:text-5xl font-bold text-white">
					{data.name}
				</h1>
				<h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wider">
					{data.title}
				</h3>
				<p className="text-base tracking-wide text-center md:text-left">
					{data.introduction}
				</p>
			</div>
		</div>
	);
};

export default Banner;
