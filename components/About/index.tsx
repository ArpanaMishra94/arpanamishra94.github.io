import Title from "../Title";
import { SiInformatica } from "react-icons/si";

const Aboutme = () => {
	return (
		<div id="aboutMe" className="wrapper">
			<Title text="About Me" icon={<SiInformatica />} />
			<div className="text-lg tracking-wide flex flex-col gap-6">
				<p>
					I am an Assistant Professor at the Department of Mathematics, Indian
					Institute of Technology, Bombay. I was a Postdoctoral researcher in
					Faculty of Pure and Applied Mathematics, Wroclaw University of Science
					and Technology. Prior to that, I spent September, 2017 - August, 2019
					as a researcher in the Stochastics group at CWI, Amsterdam. I received
					my PhD from Indian Statistical Institute in May, 2017.
				</p>
				<p>
					In general, I am interested in applied probability. To be more
					specific, I have some experience in the following topics: Extreme
					Value Theory, Stable Processes and Fields, Branching Random Walks,
					Point Processes, Random Walks in Random Environment, Branching
					Processes in random environments, Robust statistics.
				</p>
			</div>
		</div>
	);
};

export default Aboutme;
