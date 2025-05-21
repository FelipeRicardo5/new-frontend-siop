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
        route("createcase", "routes/create-case/index.jsx"),
        route("reports", "routes/reports/index.jsx"),
        route("settings", "routes/settings/index.jsx"),
        route("users", "routes/users/index.jsx"),
        route("expertreport", "routes/expertReport/index.jsx"),
        route("create-evidence", "routes/create-evidence/index.jsx"),
        route("details", "routes/details/index.jsx"),
        route("victim/:id?", "routes/victim/index.jsx"),
        route("details-evidence", "routes/details-evidence/index.jsx"),
    ]),

] satisfies RouteConfig;