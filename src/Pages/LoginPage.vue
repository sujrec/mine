<template>
  <div class="login-page">
    <div class="login-box">
      <!-- Title -->
      <h2 class="login-title">Login</h2>
      <p class="login-subtitle">Please login to continue</p>

      <!-- Login Form -->
      <form @submit.prevent="login">
        <div class="form-group">
          <label>Email or Username</label>
          <input
            v-model="username"
            type="text"
            placeholder="Enter your email or username"
            required
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" class="login-btn">LOGIN</button>
      </form>
     
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");

function login() {
  if (username.value && password.value) {
    localStorage.setItem("isLoggedIn", "true");
    router.push("/"); // redirect to home after login
  } else {
    alert("Please enter valid credentials!");
  }
}
</script>

<style scoped>
/* Full page background */
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f5f5;
}

/* Login card */
.login-box {
  background: #fff;
  padding: 40px 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 380px;
  text-align: center;
}

/* Title */
.login-title {
  font-size: 24px;
  font-weight: 600;
  color: #222;
  margin-bottom: 8px;
}

.login-subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
}

/* Form inputs */
.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  color: #444;
}

.form-group input {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
}

.form-group input:focus {
  border-color: #6a0dad;
  box-shadow: 0 0 4px rgba(106, 13, 173, 0.4);
}

/* Login button */
.login-btn {
  width: 100%;
  padding: 12px;
  background: #6a0dad; /* Purple theme */
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.login-btn:hover {
  background: #570e9a;
}

/* Divider */
.divider {
  margin: 20px 0;
  text-align: center;
  position: relative;
}

.divider span {
  background: #fff;
  padding: 0 12px;
  font-size: 14px;
  color: #888;
}

.divider::before,
.divider::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 40%;
  height: 1px;
  background: #ddd;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

/* Register link */
.register-text {
  font-size: 14px;
  color: #444;
}

.register-link {
  color: #6a0dad;
  font-weight: 600;
  text-decoration: none;
  margin-left: 5px;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
