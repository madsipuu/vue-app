<template>
  <div class="main-container">
    <!-- Header -->
    <Header />

    <main class="content">
      <h1 class="title">Main Page</h1>

      <div class="posts-grid">
        <PostCard 
          v-for="post in posts" 
          :key="post.id" 
          :post="post"
        />
      </div>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import PostCard from "../components/PostCard.vue";

export default {
  components: { Header, Footer, PostCard },

  computed: {
    ...mapState(["posts"])
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

.posts-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;   
  margin: 0 auto;     
}
</style>