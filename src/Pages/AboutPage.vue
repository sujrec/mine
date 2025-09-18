<template>
   
        <!-- <h1> {{  title }}</h1> -->
        <!-- <p> Counter: {{ count }} | doubleCount: {{ doubleCount }}</p> -->
        <button @click="toggleParagraph">Click Me</button>
        <!-- Show paragraph only if showParagraph is true -->
    <p v-if="showParagraph">This is about Vue 🚀</p>
        <button @click="goBack"> Go Back</button>
         <ButtonsGlobal @click="sayHi">Global Button</ButtonsGlobal>
  <ButtonsGlobal />
</template>

<script setup lang="ts">
import { ref } from 'vue' 
import { useRouter } from 'vue-router'
//import ButtonsGlobal from './components/ButtonsGlobal.vue'

// const title = ref('Hello')
// const count = ref(0)

// function increment(){
//     count.value++
//}

// const doubleCount = computed(() => count.value * 2)

const showParagraph = ref(false)
const router = useRouter()

function toggleParagraph() {
    showParagraph.value = !showParagraph.value
}

function goBack() {
  router.go(-1)
}

function sayHi() {
  alert("Global button clicked!")
}

</script>