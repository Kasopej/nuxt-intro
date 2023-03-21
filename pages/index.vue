<template>
  <div>Page: {{ message }}</div>
</template>

<script setup>
  useHead({
    title: "Home",
  });
  definePageMeta({
    middleware: "auth",
  });
  let message = ref(null);

  async function callAPI() {
    const { message: apiMessage } = await $fetch("/api/helloWorld");
    message.value = apiMessage;
  }
  callAPI();
</script>

<style scoped></style>
