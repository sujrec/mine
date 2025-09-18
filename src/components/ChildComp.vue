<script setup lang="ts">
 import { ref } from 'vue'

const message = ref('hello from child')

//method inside child
function showMessage() {
    alert(message.value)
}

// Expose method to parent
defineExpose({ showMessage })
</script>
<template>
    <div style="border: 1px solid gray; padding: 10px; margin: 5px;">
        <h3>I am..</h3>
     <slot />
    </div>
</template>