import type { ComponentType } from "react";
import { HomeRoute } from "./routes/home";

export type AppRoute = {
    path: string;
    Component: ComponentType;
};

export const routes: AppRoute[] = [
    {
        path: "/",
        Component: HomeRoute,
    },
];

export const defaultRoute = routes[0];