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
        route("cases", "routes/cases/index.jsx"),
    ]),

] satisfies RouteConfig;