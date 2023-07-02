import Title from "../Title";
import { SiInformatica } from "react-icons/si";
import data from "../data";

const Aboutme = () => {
	const { aboutMe } = data;
	return (
		<div id="aboutMe" className="wrapper">
			<Title text="About Me" icon={<SiInformatica />} />
			<div className="text-lg tracking-wide flex flex-col gap-6">
				{aboutMe.map((el, i) => (
					<p key={i}>{el.paragraph}</p>
				))}
			</div>
		</div>
	);
};

export default Aboutme;
