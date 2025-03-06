<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <h1>Phronesis Training</h1>

    <div class="wrapper">

      <nav>
        <RouterLink to="/project13">Project 13/14/15/18/19</RouterLink>
        <RouterLink to="/project16">Project 16/17</RouterLink>
        <RouterLink to="/project20">Project 20/23/24</RouterLink>
        <RouterLink to="/project29">Project 29</RouterLink>
        <RouterLink to="/debriefs"
                    style="color: white;background: black; font-weight: bold; padding: 6px 12px;border-radius: 4px;">
          Debriefs
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView/>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
@media (min-width: 2048px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
