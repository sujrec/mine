<template>
    
    <div>
        <!-- .trim modifier , removed  whitespace-->
        <input v-focus v-model.trim="username" placeholder="Enter username" />
        <p>Username:'{{ username }}'</p>

        <!-- .number modifier, convert to number -->
        <input v-model.number="age" type="number" placeholder="Enter age" />
        <p>Age: {{ age }} (Type: {{ typeof age }})</p>

        <!-- .lazy modifier, enter/press pxi mtra value update hunxa -->
         <input v-model.lazy="message" placeholder="Type something" />
         <p>Message: {{ message }}</p>

         <!-- v-resize: run function on window resize -->
    <div
      v-resize="onResize"
      style="width:300px; height:100px; background:lightgray; margin-top:10px;"
    >
    
      Resize the window (check console)

      
    </div>
    <p v-color="'red'">This text will be red using custom directive</p>



    
    <!-- v-permission: only visible if role matches -->
    <button v-permission="'admin'">Delete User (Admins only)</button>
    <button v-permission="'user'">Update Profile (Users only)</button>
    </div>
</template>

<script setup lang="ts">

 import { ref, getCurrentInstance } from 'vue'
 const username = ref('')

 const age = ref<number | null>(null)

 const message = ref('')

 // resize handler
function onResize() {
  console.log('Window resized at ' + new Date().toLocaleTimeString())
}

// --- Custom Directives Registration (local to this component) ---
const app = getCurrentInstance()!.appContext.app

// v-focus
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

// v-color
app.directive('color', {
  mounted(el, binding) {
    el.style.color = binding.value
  },
  updated(el, binding) {
    el.style.color = binding.value
  }
})

// v-resize
app.directive('resize', {
  mounted(el, binding) {
    el._handler = () => binding.value()
    window.addEventListener('resize', el._handler)
  },
  unmounted(el) {
    window.removeEventListener('resize', el._handler)
  }
})

// v-permission
const currentUserRole = 'user' // fake logged-in role
app.directive('permission', {
  mounted(el, binding) {
    if (binding.value !== currentUserRole) {
      el.style.display = 'none'
    }
}
})
</script>