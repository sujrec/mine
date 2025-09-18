<template>
  <button @click="$emit('click')" class="btn-global">
    <slot>Click Me</slot>
  </button>
</template>

<script setup lang="ts">
// No script logic needed here
</script>

<style scoped>
.btn-global {
  background-color: purple;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
