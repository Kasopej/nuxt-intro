<template>
  <section>
    <form>
      <label>Email<input type="email" /></label>
      <label>Password<input type="password" /></label>
    </form>
  </section>
</template>

<script setup>
  definePageMeta({
    middleware: "auth",
    layout: "auth",
  });
</script>

<style scoped>
  label {
    padding: 0 10px;
  }
</style>
