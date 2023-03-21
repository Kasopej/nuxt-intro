<template>
  <div>Page: {{ message }}</div>
</template>

<script setup>
  useHead({
    title: "Home",
  });
  const { data } = await useAsyncData(() => {
    return $fetch("/api/helloWorld");
  });
  const message = data.value.message;
</script>

<style scoped></style>
