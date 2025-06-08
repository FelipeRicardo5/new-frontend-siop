// components/auth/withRoleProtection.jsx
import { getToken, getUserRole } from "../../services/auth";
import { useEffect, useState } from "react";
import { useTheme } from "../../providers/themeContext"; // ajuste o caminho se necessário
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./layout";

export default function withRoleProtection(Component, allowedRoles = []) {
    return function ProtectedComponent(props) {
        const [isAllowed, setIsAllowed] = useState(null);
        const { theme } = useTheme();
        let role = null;

        useEffect(() => {
            const token = getToken();
            role = getUserRole();

            if (!token || !allowedRoles.includes(role)) {
                setIsAllowed(false);
            } else {
                setIsAllowed(true);
            }
        }, []);

        if (isAllowed === null) return null;

        if (!isAllowed) {
            return (
                <div className={`fixed inset-0 z-50 flex items-center justify-center px-4 py-6 ${theme === "dark" ? "bg-[#363636] text-white" : "bg-[#F4F6F6] text-gray-800"}`}>
                        <AnimatePresence>
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                className={`w-full max-w-md rounded-2xl p-6 shadow-lg transition-all duration-300 ${theme === "dark"
                                        ? "bg-[#1f1f1f] text-white"
                                        : "bg-white text-gray-800"
                                    }`}
                            >
                                <h2 className="text-2xl font-bold mb-3 text-red-600">Acesso Negado</h2>
                                <p className="mb-4 text-sm">
                                    {role ? `${role}s` : "Usuário"} não tem permissão para acessar esta página.
                                </p>
                                <button
                                    onClick={() => window.history.back()}
                                    className="mt-2 w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700"
                                >
                                    Voltar
                                </button>
                            </motion.div>
                        </AnimatePresence>
                </div>
            );
        }

        return <Component {...props} />;
    };
}
