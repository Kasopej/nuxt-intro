import { useAuthStore } from "~~/stores/auth-store";
export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  console.log("auth", authStore.authenticated);
});
