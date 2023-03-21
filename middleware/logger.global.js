export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) console.log({ from: from.path });
});
