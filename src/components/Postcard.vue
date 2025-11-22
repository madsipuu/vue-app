<template>
    <div class="post-card">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <img :src=post.picture />
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style>



.post-card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
  background: white;
}

.post-card img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}
</style>