import Image from "next/image";
import profileImg from "../../public/Img/IMG_20230629_120036 (1).jpg";

const Banner = () => {
	return (
		<div
			id="banner"
			className="wrapper flex flex-col md:flex-row items-center gap-10"
		>
			<div className="w-44 h-44">
				<Image
					className="w-full h-full rounded-full border-[1px] border-white-700 p-2 object-cover"
					src={profileImg}
					alt="profileImg"
				/>
			</div>
			<div className="w-3/4 flex flex-col items-center md:items-start gap-2">
				<h1 className=" text-2xl md:text-5xl font-bold text-white">
					Mohit Kumar Baghel
				</h1>
				<h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wider">
					Assistant Professor
				</h3>
				<p className="text-base tracking-wide text-center md:text-left">
					Presently, I am an Assistant Professor at the Department of
					Mathematics, Indian Institute of Technology, Bombay. I received my PhD
					from Indian Statistical Institute in May, 2017.
				</p>
			</div>
		</div>
	);
};

export default Banner;
