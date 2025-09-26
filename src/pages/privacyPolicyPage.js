import { Helmet } from "react-helmet";
import PoliciesLayout from '../sections/policies/policiesLayout';
import privacyPolicyData from '../data/policies/privacyPolicy.json';

const PrivacyPolicyPage = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy</title>
                <meta name="description" content="Description here..." />
                <meta name="keywords" content="Keywords separated with comma here..." />
            </Helmet>

            <PoliciesLayout json={privacyPolicyData}/>
        </>
    );
}

export default PrivacyPolicyPage;