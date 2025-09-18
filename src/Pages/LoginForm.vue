<template>
  <div class="login-page">
    <div class="login-box">
      <h2 class="login-title">Login</h2>

      <form @submit.prevent="login">
        <!-- Username/Email -->
        <div class="form-group">
          <label>Email or Username</label>
          <input 
            v-model="username" 
            type="text" 
            placeholder="Enter your email or username" 
            required 
          />
        </div>

        <!-- Password -->
        <div class="form-group">
          <label>Password</label>
          <input 
            v-model="password" 
            type="password" 
            placeholder="Enter your password" 
            required 
          />
        </div>

        <!-- Remember me + Forgot password -->
        <div class="form-options">
          <label>
            <input type="checkbox" v-model="rememberMe" />
            Remember Me
          </label>
          <a href="#" class="forgot">Forgot Password?</a>
        </div>

        <!-- Login Button -->
        <button type="submit" class="login-btn">Login</button>
      </form>

      <!-- Register Redirect -->
      <p class="register-text">
        Don't have an account? 
        <router-link to="/register" class="register-link">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const rememberMe = ref(false)

function login() {
  if (username.value && password.value) {
    // Normally here you call backend API
    localStorage.setItem('isLoggedIn', 'true')
    if (rememberMe.value) {
      localStorage.setItem('rememberUser', username.value)
    }
    router.push('/') // redirect home
  } else {
    alert('Please enter valid credentials!')
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background: #f5f5f5;
}

.login-box {
  background: #fff;
  padding: 30px 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
  color: #6a0dad;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 0.9rem;
}

.form-group input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
}

.form-group input:focus {
  border-color: #6a0dad;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-size: 0.85rem;
}

.forgot {
  color: #6a0dad;
  text-decoration: none;
}

.forgot:hover {
  text-decoration: underline;
}

.login-btn {
  width: 100%;
  padding: 12px;
  background: #6a0dad;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.login-btn:hover {
  background: #5a0bb0;
}

.register-text {
  margin-top: 15px;
  text-align: center;
  font-size: 0.9rem;
}

.register-link {
  color: #6a0dad;
  text-decoration: none;
  font-weight: bold;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
