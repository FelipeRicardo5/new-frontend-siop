import { useEffect, useState } from "react";
import Layout from "./layout";
import { getToken, getUserRole } from "../../services/auth";

export default function RoleProtectedLayout({ allowedRoles = [], children }) {
  const [isAllowed, setIsAllowed] = useState(null);

  useEffect(() => {
    const token = getToken();
    const role = getUserRole();

    if (!token || !allowedRoles.includes(role)) {
      setIsAllowed(false);
      console.log("Acesso negado. Token ou função inválidos.");
    } else {
      setIsAllowed(true);
        console.log("Acesso permitido. Token e função válidos.");
    }
  }, [allowedRoles]);

  if (isAllowed === null) return null;

  return (
    <Layout>
      {!isAllowed && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#1f1f1f] p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h2 className="text-xl font-bold mb-2 text-red-600">Acesso Negado</h2>
            <p className="text-sm mb-4">
              Você não tem permissão para acessar esta página.
            </p>
            <button
              onClick={() => window.history.back()}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Voltar
            </button>
          </div>
        </div>
      )}

      {isAllowed && children}
    </Layout>
  );
}
