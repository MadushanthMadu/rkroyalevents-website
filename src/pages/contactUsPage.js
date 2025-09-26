import { Helmet } from "react-helmet";
import ContactUsLayout from "../sections/contactUs/contactUsLayout";

const ContactUsPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us</title>
                <meta name="description" content="Description here..." />
                <meta name="keywords" content="Keywords separated with comma here..." />
            </Helmet>

            <ContactUsLayout />
        </>
    );
}

export default ContactUsPage;