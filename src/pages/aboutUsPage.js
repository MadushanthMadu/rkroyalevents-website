import { Helmet } from "react-helmet";
import AboutUsLayout from "../sections/aboutUs/aboutUsLayout";

const AboutUsPage = () => {
    return (
        <>
            <Helmet>
                <title>About Us</title>
                <meta name="description" content="Description here..." />
                <meta name="keywords" content="Keywords separated with comma here..." />
            </Helmet>

            <AboutUsLayout />
        </>
    );
}

export default AboutUsPage;