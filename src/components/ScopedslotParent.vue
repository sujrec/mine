<template>
    <Child v-slot="{ count, increment }">
        <p>Count: {{ count }}</p>
        <button @click="increment">Increase Count</button>
    </Child>
</template>

<script setup lang="ts">
import Child from './ScopedslotChild.vue'
</script>