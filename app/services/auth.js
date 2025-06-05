import axios from "axios";


const API_URL = "https://backend-siop.onrender.com/api"; // Altere para o endereço da sua API

export function saveUserSession(token, user) {
  localStorage.setItem("token", token);
  localStorage.setItem("role", user.role); // <== novo
}

export function getToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
}

export function getUserRole() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("role");
}

export function clearSession() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
}
