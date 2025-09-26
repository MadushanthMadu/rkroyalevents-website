import { Helmet } from "react-helmet";
import PoliciesLayout from '../sections/policies/policiesLayout';

const TermsAndConditionsPage = () => {
    return (
        <>
            <Helmet>
                <title>Terms and Conditions</title>
                <meta name="description" content="Description here..." />
                <meta name="keywords" content="Keywords separated with comma here..." />
            </Helmet>

            <PoliciesLayout />
        </>
    );
}

export default TermsAndConditionsPage;