import {
    type RouteConfig,
    index,
    route,
    layout,
} from "@react-router/dev/routes";

export default [
    index("routes/login/index.tsx"),

    // Nessa configuração, seria basicamente telas onde todos podem acessar
    layout("components/layouts/assistenteLayout.jsx", [
        route("cases", "routes/cases/index.jsx"),
        route("reports", "routes/reports/index.jsx"),
        route("settings", "routes/settings/index.jsx"),
    ]),
    
    // Nessa configuração, seriam telas onde apenas o administrador pode acessar
    layout("components/layouts/adminLayout.jsx", [
        route("users", "routes/users/index.jsx"),
        route("createuser", "routes/create-user/index.jsx"),
    ]),
    
    // Nessa configuração, seriam telas onde apenas o perito pode acessar
    layout("components/layouts/peritoLayout.jsx", [
        route("dashboard", "routes/dashboard/index.jsx"),
        route("createcase", "routes/create-case/index.jsx"),
        route("createevidence", "routes/create-evidence/index.jsx"),
        route("detailsevidences", "routes/details-evidence/index.jsx"),
        route("victim/:id?", "routes/victim/index.jsx"),
        route("expertreport", "routes/expertReport/index.jsx"),
        route("details", "routes/details/index.jsx"),
    ]),
] satisfies RouteConfig;
