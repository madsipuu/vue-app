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
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
  background: rgb(0, 0, 0);
}

.post-card img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}
.likes { font-weight: 600; color: rgb(255, 255, 255); margin-left: 10px; }
button { padding: 6px 10px; border-radius: 6px; border: 1px solid #bbb; background: #f5f5f8 }

</style>