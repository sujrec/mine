
<script setup lang="ts">
import { ref, computed } from 'vue'
import UserCard from '../components/UserCard.vue'
import ParentComp from '../components/ParentComp.vue'
import vIf from '../components/vIf.vue'
import vShow from '../components/vShow.vue'
import NameslotParent from '../components/NameslotParent.vue'
import ScopedslotParent from '../components/ScopedslotParent.vue'
import NavigationDemo from '../components/NavigationDemo.vue'

// Interface for user 
interface User {
  id: number
  name: string
  age: number
}

const title = ref('Welcome to HomePage')
  const count = ref(0)
  // const bgImage = ref('https://tse1.mm.bing.net/th/id/OIP.cmAsUu-bfF7IELyYDqskEgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3')
 
 
  const users = ref<User[]>([
    { id: 1, name: 'sujana', age: 21 },
    { id: 2, name: 'suj', age: 24 }
])

//computed with ref
const doubleCount = computed(() => count.value * 2)

// ✅ methods
function increment() {
  count.value++
   console.log("Button clicked, count:", count.value)
}

function clk() {
  console.log("clicked me fast")
}

function abc(){
  console.log("suj suj suj")
}

function handleGreet(name: string) {
  alert(`Hello from ${name}! 👋`)
}
</script>

<template>
  <h1>{{ title }}</h1>
  <!-- <MyButton>Click</MyButton> -->

  <!-- <div class="bind" :style="{ backgroundImage: `url(${bgImage})` }"></div> -->

  <p> Counter: {{ count }} | Double: {{ doubleCount }}</p>
  
  <button @click ="increment">Increment</button>
  <div @click="abc">
  <button @click.self ="clk">Clicked Me</button></div>

  <h2>User List</h2>
  <div>
    <UserCard 
      v-for="u in users"
      :key="u.id"  
      :user="u"  
      @greet="handleGreet"
    />
  </div>
  <ParentComp />
  <vIf />
  <vShow />
  <NameslotParent />
  <ScopedslotParent />
  <NavigationDemo />
</template>

<style scoped>
.bind {
  height: 300px;
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
}
.active {
  background-color: lightgreen;
}
</style>
