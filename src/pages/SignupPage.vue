<template>
  <header class="header">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/signup">Signup</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
.header {
  background: #ddd;
  padding: 15px;
}

nav a {
  margin-right: 15px;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
</style>