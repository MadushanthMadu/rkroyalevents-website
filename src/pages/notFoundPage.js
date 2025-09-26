import { Helmet } from "react-helmet";
import NotFoundLayout from "../sections/error/notFoundLayout";

const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <title>Not Found</title>
            </Helmet>

            <NotFoundLayout />
        </>
    );
}

export default NotFoundPage;