import { PiLinkSimpleBold } from "react-icons/pi";
import Title from "../Title";
import LinksInput from "./LinksInput";

const Skills = () => {
	return (
		<div id="links" className="wrapper">
			<Title text="Links" icon={<PiLinkSimpleBold />} />
			<div className="flex gap-4 flex-wrap">
				<LinksInput
					title="Undergraduate projects in University of California, Berkeley under supervision of Prof. Aldous"
					link="https://www.stat.berkeley.edu/~aldous/Research/Ugrad/ugrad_res_old.html"
				/>
				<LinksInput
					title=" Probability for undergraduates maintained by Prof. Pipiras"
					link="https://pipiras.web.unc.edu/teaching/teaching-undergraduate-probability/"
				/>
				<LinksInput
					title=" REU program organized by the Department of Mathematics at University of Chicago."
					link="http://math.uchicago.edu/~may/REU2022/"
				/>
			</div>
		</div>
	);
};

export default Skills;
