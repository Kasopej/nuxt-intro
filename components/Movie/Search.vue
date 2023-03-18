<template>
  <form @submit.prevent="findMovies" style="padding: 20px">
    <label id="movies-search"
      ><input v-model="movieQuery" type="text" placeholder="search movies"
    /></label>
    <button class="submit-btn" type="submit">Search</button>
  </form>
</template>

<script setup>
  const emit = defineEmits(["moviesSearch"]);
  const movieQuery = ref("batman");
  const {
    public: { omdbAPI_Key },
  } = useRuntimeConfig();
  async function findMovies() {
    if (!movieQuery.value) return;
    const { Search } = await $fetch(
      `http://www.omdbapi.com?apiKey=${omdbAPI_Key}&s=${movieQuery.value}`
    );
    emit("moviesSearch", Search);
  }

  findMovies();
</script>

<style lang="scss" scoped></style>
