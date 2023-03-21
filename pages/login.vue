<template>
  <section class="p-6">
    <form
      class="m-auto p-4 border border-solid border-gray-700 shadow-gray-700 shadow-sm"
      @submit.prevent="login"
    >
      <h2 class="px-2 text-center text-2xl">Login</h2>
      <label class="block p-2 mb-2"
        >Email<input class="ml-2 !bg-transparent rounded-sm" type="email"
      /></label>
      <label class="block p-2 mb-2"
        >Password<input class="ml-2 !bg-transparent rounded-sm" type="password"
      /></label>
      <button
        class="px-3 py-2 ml-2 border border-solid border-black m-auto rounded-md"
        type="submit"
      >
        Login
      </button>
    </form>
  </section>
</template>

<script setup>
  import { useAuthStore } from "~~/stores/auth-store";
  definePageMeta({
    layout: "guest",
    middleware: "guest",
  });
  const authStore = useAuthStore();
  const router = useRouter();
  function login() {
    authStore.LOGIN();
    router.push("/");
  }
</script>

<style scoped></style>
