<template>
  <section>
    <form @submit.prevent="findMovies" style="padding: 20px">
      <label id="movies-search"
        ><input v-model="movieQuery" type="text" placeholder="search movies"
      /></label>
      <button class="submit-btn" type="submit">Search</button>
    </form>
    <div v-if="movies.length" class="flex" style="margin: 0 auto">
      <NuxtLink
        prefetch
        class="movies-link"
        v-for="movie in movies"
        :key="movie.imdbID"
        :to="{ name: 'movies-id', params: { id: movie.imdbID } }"
        ><img :src="movie.Poster" :alt="movie.Title"
      /></NuxtLink>
    </div>
  </section>
</template>

<script setup>
  const movieQuery = ref(null);
  const movies = ref([]);
  const {
    public: { omdbAPI_Key },
  } = useRuntimeConfig();
  async function findMovies() {
    if (!movieQuery.value) return;
    const { Search } = await $fetch(
      `http://www.omdbapi.com?apiKey=${omdbAPI_Key}&s=${movieQuery.value}`
    );
    movies.value = Search;
  }
</script>

<style>
  .flex {
    display: flex;
    flex-wrap: wrap;
  }
  .movies-link {
    padding: 0 20px;
  }
  #movies-search {
    display: block;
    margin-bottom: 10px;
  }
  .submit-btn {
    padding: 0 10px;
    background-color: green;
    color: white;
    border: solid 1px green;
    border-radius: 10px;
    outline: 0;
    cursor: pointer;
  }
</style>
