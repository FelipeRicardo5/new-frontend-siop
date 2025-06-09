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
        route("detailsCase/:id", "routes/detailsCase/index.jsx"),
        route("chat/:caseId", "routes/chat/index.jsx"),
        route("channels/:id?", "routes/channelChat/index.jsx"),
        route("cases/:id?", "routes/cases/index.jsx"),
        route("reports", "routes/reports/index.jsx"),
        route("settings/:id?", "routes/settings/index.jsx"),
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
        route("expertreport", "routes/expertReport/index.jsx"),
    ]),
] satisfies RouteConfig;
