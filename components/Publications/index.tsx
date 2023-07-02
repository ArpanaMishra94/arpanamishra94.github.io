import Title from "../Title";
import { MdPublish } from "react-icons/md";
import data from "../data";

const Publications = () => {
	const { preprints } = data;
	return (
		<div id="publications" className="wrapper">
			<Title text="Research & Publications" icon={<MdPublish />} />
			<div className="px-6 py-2">
				<ul className="flex flex-col gap-5 tracking-wide list-disc">
					{preprints.map((el, i) => (
						<li key={i}>
							{el.content}
							<a href={el.link} target="_blank" className="text-blue-400 ml-1">
								{el.linkText}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Publications;
