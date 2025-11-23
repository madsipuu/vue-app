<template>
  <div class="main-container">
    <!-- Header -->
    <Header />

    <main class="content">
      <h1 class="title">Signup</h1>

      <!-- Signup Form Container -->
      <div class="signup-box">
        <form class="signup-form" @submit.prevent="handleSubmit">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Email" 
            v-model="email" 
            required
          />

          <label>Password</label>
          <input 
            type="password" 
            placeholder="Password" 
            v-model="password"
            @input="validatePassword"
            required
          />

          <!--Password Validation Error-->
          <div v-if="passwordError && password.length > 0" class="error-box">
            <p class="error-text">The password is not valid - {{ passwordError }}</p>
          </div>

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
  components: { Header, Footer },
  
  data() {
    return {
      email: '',
      password: '',
      passwordError: ''
    };
  },

  methods: {
    validatePassword() {
      const pwd = this.password;

      // Check length
      if (pwd.length < 8 || pwd.length > 15) {
        this.passwordError = 'The password should be at least 8 characters and less than 15 characters';
      } 
      
      // Check for uppercase letter
      else if (!/[A-Z]/.test(pwd)) {
        this.passwordError = 'The password should contain at least one uppercase letter';
      }

      //Chec for at least 2 lowercase letters
      else if ((pwd.match(/[a-z]/g) || []).length < 2) {
        this.passwordError = 'The password should contain at least two lowercase letters';
      }
      
      //Check for number
      else if (!/[0-9]/.test(pwd)) {
        this.passwordError = 'The password should contain at least one number';
      } 

      //Check for special character '_'
      else if (!/[_]/.test(pwd)) {
        this.passwordError = "The password should contain at least one special character: '_'";
      } 

      //Check for starting uppercase letter
      else if (!/^[A-Z]/.test(pwd)) {
        this.passwordError = 'The password should start with an uppercase letter';
      }

      else {
      this.passwordError = '';
      }

    },

    handleSubmit() {
      this.validatePassword();

      if (!this.passwordError && this.email.length > 0) {
        alert('Signup successful!');
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        
      } else if (this.passwordError) {
        alert('Please fix password errors');
      }
    }
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

/* Signup Box Styling */
.signup-box {
  display: flex;
  justify-content: center;
  
}

.signup-form {
  background: #2a2a2a;
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

/* Error Box */
.error-box {
  margin-top: 15px;
  padding: 15px;
  background: #ffe6e6;
  border-radius: 8px;
  border: 1px solid #e74c3c;
}

.error-text {
  margin: 0;
  font-weight: bold;
  color: #c0392b;
  font-size: 14px;
}
</style>