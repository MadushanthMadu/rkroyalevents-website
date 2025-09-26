import { Helmet } from "react-helmet";
import HomeLayout from '../sections/home/homeLayout';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>RK Royal Events & Decor</title>
                <meta name="description" content="Description here..." />
                <meta name="keywords" content="Keywords separated with comma here..." />
            </Helmet>

            <HomeLayout />
        </>
    );
}

export default HomePage;