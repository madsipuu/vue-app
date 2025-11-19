<template>
  <div class="post-card">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
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
</style>