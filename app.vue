<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script>
  useHead({
    titleTemplate: "%s - Nuxt Movies App",
  });
</script>

<style>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .nav-item {
    display: inline-block;
    padding: 0 10px;
  }
</style>
