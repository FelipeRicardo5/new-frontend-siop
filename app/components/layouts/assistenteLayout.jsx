import RoleProtectedLayout from "./roleProtectedLayout";

export default function AdminLayout({ children }) {
  return <RoleProtectedLayout allowedRoles={["admin", "perito", "assistente"]}>{children}</RoleProtectedLayout>;
}