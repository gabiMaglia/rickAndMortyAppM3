/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom"
import PATH_ROUTES from "./routes.helper"

const ProtectedRoutes = ({ access }) => {

    return (
        access ? <Outlet /> : <Navigate to={PATH_ROUTES.LOGIN} />
    )
}

export default ProtectedRoutes