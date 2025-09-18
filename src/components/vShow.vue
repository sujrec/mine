<!--  css display hide/show using css -->

<template>
<div>
<button @click="tn">Toggle v-show</button>
<p v-show="show">This is parag is hide/show</p>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

//true grda show hunna
const show = ref(false)


//show.value = !show.value yo grda show hunxa show.value = show.value yo grda hunna
function tn(){
    show.value = !show.value
    console.log('v-show', show.value)
}
</script>