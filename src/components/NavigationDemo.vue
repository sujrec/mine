<!-- src/components/NavigationDemo.vue -->
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToUser() {
  router.push({ name: 'User', params: { id: 1 }, query: { from: 'nav-demo' } })
}

function replaceWithAbout() {
  router.replace({ name: 'About' })
}

function goBack() {
  router.go(-1)
}

function goForward() {
  router.go(1)
}
</script>

<template>
  <div style="border:1px solid gray; padding:10px; margin:10px;">
    <h3>Navigation Demo </h3>
    <button @click="goToUser"> Go to User (push)</button>
    <button @click="replaceWithAbout"> Replace with About</button>
    <button @click="goBack"> Go Back</button>
    <button @click="goForward"> Go Forward</button>
  </div>
</template>
