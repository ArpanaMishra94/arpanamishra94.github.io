import Banner from "@/components/Banner";
import Aboutme from "@/components/About";
import Teaching from "@/components/Teaching";
import Links from "@/components/Links";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<main className="w-full bg-gray-950 text-gray-300">
			<Navbar />
			<div className="max-w-screen-xl mx-auto lg:pt-10 px-4">
				<Banner />
				<Aboutme />
				<Publications />
				<Teaching />
				<Links />
				<Contact />
			</div>
		</main>
	);
}
