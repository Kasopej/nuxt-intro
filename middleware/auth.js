import { useAuthStore } from "~~/stores/auth-store";
export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  if (process.client) console.log({ from });

  if (!authStore.authenticated) {
    if (from.name !== "login") return navigateTo({ path: "/login" });
    else return abortNavigation("denied");
  }
});
