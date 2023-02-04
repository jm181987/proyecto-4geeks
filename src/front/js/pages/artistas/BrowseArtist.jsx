// import node module libraries
import { Container } from 'react-bootstrap';

// import custom components
import SectionHeadingLeft from '../../component/common/section-headings/SectionHeadingLeft.jsx';

// import sub components
import ArtistTapSlider from './ArtistTapSlider.jsx';

const BrowseCategories = () => {
	const title = "The world's top courses";
	const subtitle = 'Browse Categories';
	const description = `Choose from 32,000 online video courses with new additions published every month.`;

	return (
		<div className="py-8 py-lg-16 bg-light-gradient-bottom bg-white">
			<Container>
				<SectionHeadingLeft
					title={title}
					description={description}
					subtitle={subtitle}
				/>
				<ArtistTapSlider />
			</Container>
		</div>
	);
};
export default BrowseCategories;
