<template>
  <section>
    <MovieSearch @movies-search="showMovies"></MovieSearch>
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
  const movies = ref([]);
  function showMovies(moviesReceived) {
    movies.value = moviesReceived;
  }

  useHead({
    title: "Search Movies",
  });
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
