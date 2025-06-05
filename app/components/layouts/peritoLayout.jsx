import RoleProtectedLayout from "./roleProtectedLayout";
import withRoleProtection from "./withRoleProtection";

function PeritoLayout({ children }) {
  return <RoleProtectedLayout allowedRoles={["perito", "admin"]}>{children}</RoleProtectedLayout>;
}

export default withRoleProtection(PeritoLayout, ["perito", "admin"]);