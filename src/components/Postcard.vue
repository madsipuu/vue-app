<template>
    <div class="post-card">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <img :src=post.picture />
      <button @click="like">👍</button>
      <span class="likes">{{ post.likes }} likes</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Post',
  props: { post: { type: Object, required: true } },
  methods: {
    ...mapActions(['likePost']),
    like() { this.likePost(this.post.id) }
  }
}
</script>

<style>
.post-card {
  border: 1px solid #ffffff;  /* ← Muuda valgeks */
  padding: 25px;
  border-radius: 15px;
  background: #2a2a2a;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.post-card h3 {
  color: #ffffff;  /* Valge pealkiri */
  margin-top: 0;
}

.post-card p {
  color: #cccccc;  /* Heledam hall tekst */
}

.post-card img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  margin: 15px 0;  /* Õhk ümber pildi */
}

.likes { 
  font-weight: 600; 
  color: rgb(255, 255, 255); 
  margin-left: 10px; 
}

button { 
  padding: 8px 12px; 
  border-radius: 6px; 
  border: 1px solid #bbb; 
  background: #f5f5f8;
  cursor: pointer;
}

button:hover {
  background: #e0e0e0;
}
</style>