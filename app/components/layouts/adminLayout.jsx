import RoleProtectedLayout from "./roleProtectedLayout";
import withRoleProtection from "./withRoleProtection";

function AdminLayout({ children }) {
  return <RoleProtectedLayout allowedRoles={["admin"]}>{children}</RoleProtectedLayout>;
}

export default withRoleProtection(AdminLayout, ["admin"]);