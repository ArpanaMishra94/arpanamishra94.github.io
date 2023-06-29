import Banner from "@/components/Banner";
import Aboutme from "@/components/About";
import Experience from "@/components/Experience";
import Links from "@/components/Links";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<main className="w-full bg-gray-950 text-gray-300">
			<Navbar />
			<div className="max-w-screen-xl mx-auto lg:pt-10 px-4">
				<Banner />
				<Aboutme />
				{/* <Experience /> */}
				<Links />
				{/* <Projects /> */}
				<Contact />
			</div>
		</main>
	);
}
