import { Navigate } from 'react-router-dom';

const AuthRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token || !user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default AuthRoute;