import { Routes, Route } from "react-router-dom";
import { SondeoRoutes } from "../Components/BodySection/routes/SondeoRoutes";
import { LoginPage } from "../auth/pages/LoginPage";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/auth/*"
                element={<AuthRoutes></AuthRoutes>}>
            </Route>

            <Route path="/*"
                element={<SondeoRoutes></SondeoRoutes>}>
            </Route>
        </Routes>
    )
};