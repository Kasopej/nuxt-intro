<template>
  <div>
    <nav class="flex">
      <ul class="m-0 p-0 list-none">
        <li class="inline-block px-3 py-0">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="inline-block px-3 py-0">
          <nuxt-link to="/movies">Movies</nuxt-link>
        </li>
        <li class="inline-block px-3 py-0">
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
      </ul>
    </nav>
    <slot></slot>
  </div>
</template>

<script setup></script>
