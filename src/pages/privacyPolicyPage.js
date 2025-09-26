import { Helmet } from "react-helmet";
import PoliciesLayout from '../sections/policies/policiesLayout';

const PrivacyPolicyPage = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy</title>
                <meta name="description" content="Description here..." />
                <meta name="keywords" content="Keywords separated with comma here..." />
            </Helmet>

            <PoliciesLayout />
        </>
    );
}

export default PrivacyPolicyPage;