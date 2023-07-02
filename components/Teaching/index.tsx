import Title from "../Title";
import { GiTeacher } from "react-icons/gi";

const Teaching = () => {
	return (
		<div id="teachings" className="wrapper">
			<Title text="Teaching" icon={<GiTeacher />} />
			<div className="px-6 py-2">
				<ul className="flex flex-col gap-5 tracking-wide list-disc">
					<li>
						MA 820 (Stochastic Processes) (
						<a
							href="https://drive.google.com/drive/folders/1RE8nLsOXAsw5AgQrAhTJstd0vDQ8bpuG"
							target="_blank"
							className="text-blue-400 ml-1"
						>
							See here for the updated lecture notes
						</a>
						. The lecture notes may contain typo and errors. In case of any
						confusion, please feel free to send an email to me)
					</li>
					<li>
						SI 427 (Probability Theory I) (Minor course) July - November, 2022.
						<a
							href="https://drive.google.com/drive/folders/1eGVam7QD03uKjz24mzYeU1CtUk8RV0nF"
							target="_blank"
							className="text-blue-400 ml-1"
						>
							(Exercises can be found here)
						</a>
					</li>
					<li>
						SI 427 (Probability theory I) (Minor course) July- November, 2021.
						<a
							href="https://sites.google.com/view/probabilitytheory2021/home"
							target="_blank"
							className="text-blue-400 ml-1"
						>
							Website for the course.
						</a>
						(Materials may not be accessible to all).
					</li>
					<li>
						Teaching Assistant for Probability Theory II (instructor:
						<a
							href="https://sites.google.com/site/rshazra/"
							target="_blank"
							className="text-blue-400 ml-1"
						>
							Prof. Rajat Subhra Hazra
						</a>
						in the second semester of 2015-2016 at
						<a
							href="https://www.isical.ac.in/"
							target="_blank"
							className="text-blue-400 ml-1"
						>
							Indian Statistical Institute, Kolkata.
						</a>
					</li>
					<li>
						Teaching Assistant for Probability Theory II (instructor:
						<a
							href="https://sites.google.com/site/rshazra/"
							target="_blank"
							className="text-blue-400 ml-1"
						>
							Prof. Rajat Subhra Hazra
						</a>
						in the second semester of 2015-2016 at
						<a
							href="https://www.isical.ac.in/"
							target="_blank"
							className="text-blue-400 ml-1"
						>
							Indian Statistical Institute, Kolkata.
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Teaching;
