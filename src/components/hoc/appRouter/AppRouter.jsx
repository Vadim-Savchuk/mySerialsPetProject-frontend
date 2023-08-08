import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux"

import PrivateLoyout from '../privateLoyout/PrivateLoyout';
import PublicLoyout  from '../publicLoyout/PublicLoyout';

import { checkIsAuth } from "../../../redux/features/authSlice";

import { privateRoutes, publicRoutes } from '../../../router/rotes';

const AppRouter = () => {
    const isAuth = useSelector(checkIsAuth)

    return (
        isAuth
            ?
            <PrivateLoyout>
                <Routes >
                    {privateRoutes.map(route => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))}

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes >
            </PrivateLoyout>
            :
            <PublicLoyout>
                <Routes >
                    {publicRoutes.map(route => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))}

                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes >
            </PublicLoyout>
    )
}

export default AppRouter