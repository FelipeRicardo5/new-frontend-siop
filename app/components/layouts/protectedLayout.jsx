// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import Layout from "./layout";

// export default function ProtectedLayout({ children }) {
//   const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const token = localStorage.getItem("token");
//       console.log("Token no ProtectedLayout:", token);
//       if (!token) {
//         navigate("/", { replace: true });
//       } else {
//         setIsAuthenticated(true);
//       }
//     }
//   }, [navigate]);

//   if (isAuthenticated === null) return null; // Evita render até verificar token

//   return <Layout>{children}</Layout>;
// }
