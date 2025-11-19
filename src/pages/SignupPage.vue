<template>
  <div class="main-container">
    <!-- Header -->
    <Header />

    <main class="content">
      <h1 class="title">Signup</h1>

    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";


export default {
  components: { Header, Footer },

  computed: {

  }
};
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
}

.title {
  margin-bottom: 20px;
  text-align: center;
}

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