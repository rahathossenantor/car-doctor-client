import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return (
            <div className="text-center h-screen flex items-center justify-center h-70-screen">
                {/* <span className="loading loading-spinner loading-lg"></span> */}

                <div className="loader">
                    <div className="loader__bar"></div>
                    <div className="loader__bar"></div>
                    <div className="loader__bar"></div>
                    <div className="loader__bar"></div>
                    <div className="loader__bar"></div>
                    <div className="loader__ball"></div>
                </div>

            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
};

export default PrivateRoutes;
