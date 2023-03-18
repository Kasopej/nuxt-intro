<template>
  <div>
    <nav style="display: flex">
      <ul>
        <li class="nav-item">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/movies">Movies</nuxt-link>
        </li>
      </ul>
    </nav>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script></script>

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
