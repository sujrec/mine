<template>
  <div>
    <button @click="toggle">Toggle</button>
    
    <p v-if="!show">This paragraph is rendered only if show = true</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)

//If show was false, now it becomes true.
// If show was true, now it becomes false.
function toggle() {
  show.value = !show.value  
  console.log('v-if:', show.value)
}
</script>
