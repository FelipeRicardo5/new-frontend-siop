import {
    type RouteConfig,
    index,
    route,
    layout,
    prefix,
} from "@react-router/dev/routes";

export default [
    index("routes/login/index.tsx"),

    layout("./components/layouts/layout.jsx", [
        route("dashboard", "routes/dashboard/index.jsx"),
        route("cases", "routes/cases/index.jsx"),
        route("reports", "routes/reports/index.jsx"),
        route("settings", "routes/settings/index.jsx"),
        route("users", "routes/users/index.jsx"),
    ]),

] satisfies RouteConfig;