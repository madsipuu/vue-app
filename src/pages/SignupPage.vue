<template>
  <div class="main-container">
    <!-- Header -->
    <Header />

    <main class="content">
      <h1 class="title">Signup</h1>

      <!-- Signup Form Container -->
      <div class="signup-box">
        <form class="signup-form">
          <label>Email</label>
          <input type="email" placeholder="Email" />

          <label>Password</label>
          <input type="password" placeholder="Password" />

          <button type="submit" class="signup-btn">Signup</button>
        </form>
      </div>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Header, Footer }
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

/* Signup Box Styling */
.signup-box {
  display: flex;
  justify-content: center;
}

.signup-form {
  background: #f0f4e6;
  padding: 30px 40px;
  border-radius: 15px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  width: 320px;
  display: flex;
  flex-direction: column;
}

.signup-form label {
  margin-top: 10px;
  font-weight: bold;
}

.signup-form input {
  margin-top: 5px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.signup-btn {
  margin-top: 20px;
  padding: 10px;
  background: #7bb6ff;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
}

.signup-btn:hover {
  background: #5a9eea;
}
</style>
