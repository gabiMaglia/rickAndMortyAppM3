import { Navigate, Outlet } from "react-router-dom"
import PATH_ROUTES from "./routes.helper"

const ProtectedRoutes = ({ access }) => {
    /**
     * Protected route middleware, this checks if you are login or not
     * and let you go trough or redirects you to the login page
     * @param {boolean} access - It recives the login state.
     */
    return (
        access ? <Outlet /> : <Navigate to={PATH_ROUTES.LOGIN} />
    )
}

export default ProtectedRoutes