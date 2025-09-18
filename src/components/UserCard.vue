<script setup lang="ts">
// define interface
interface User {
    id: number
    name: string
    age: number
}

// Props, emits
const props = defineProps<{ user: User}>()
const emit = defineEmits<{ (e: 'greet', name: string): void }>()

function sayHello(){
    emit('greet', props.user.name)
}


</script>

<template>
  <div style="border: 1px solid gray; padding: 10px; margin: 5px;">
    <h3>{{ user.name }} ({{ user.age }} years old)</h3>
    <button @click="sayHello">Say Hello 👋</button>
    <!-- ✅ Router navigation with params + query -->
    <router-link
      :to="{ name: 'User', params: { id: user.id }, query: { from: 'homepage' } }"
    >
      View Profile
    </router-link>
  </div>
</template>