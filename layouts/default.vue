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
        <li class="nav-item">
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
      </ul>
    </nav>
    <slot></slot>
  </div>
</template>
