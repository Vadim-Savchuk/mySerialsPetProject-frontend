import HomePage     from "../pages/homePage/HomePage"
import LoginPage    from "../pages/loginPage/LoginPage"
import RegisterPage from "../pages/registerPage/RegisterPage"
import UserPage     from "../pages/userPage/UserPage"

export const privateRoutes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/user',
        element: <UserPage />
    },
]

export const publicRoutes = [
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
]