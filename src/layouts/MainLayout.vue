<template>
  <div class="layout">
    <!-- Header -->
    <header class="header">
      <h1>My Vue App</h1>
      <nav>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/VModel">VModel</router-link>

        <!-- Auth links -->
        <template v-if="isLoggedIn">
          <button @click="logout" class="nav-link">Logout</button>
        </template>
        <template v-else>
          <router-link class="nav-link" to="/LoginPage">Login</router-link>
        </template>
      </nav>
    </header>

    <!-- Main content -->
    <main class="main-content">
      <div class="content-container">
        <router-view />
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>© 2025 My Vue App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoggedIn = ref(false) // fake state for now

function logout() {
  isLoggedIn.value = false
  router.push('/LoginPage') // redirect to login page
}
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

/* Header */
.header {
  background-color: #6a0dad;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  box-sizing: border-box;
}

.header h1 {
  margin: 0;
  font-size: 1.2rem;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-weight: 500;
  margin-left: 15px;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-link:hover {
  text-decoration: underline;
}

/* Main content */
.main-content {
  flex: 1;
  width: 100%;
  padding: 20px 0;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
}

.content-container {
  width: 100%;
  max-width: 800px;
  padding: 0 20px;
  box-sizing: border-box;
}

.header, .footer {
  width: 90vw;
  padding: 10px 20px;
}
</style>
