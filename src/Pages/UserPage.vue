 <script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { defineProps } from 'vue'

const prop = defineProps<{
  name: string
}>()

const route = useRoute()

const userId = ref(route.params.id)
const referrer = ref(route.query.from)


onMounted(() => {
  console.log('UserPage mounted, ID:', userId, 'Query:', referrer)
})
</script>

<template>
  
  <p>User ID: {{ userId }}</p>
  <p>Referrer: {{ referrer }}</p>
  <p> Welcome, {{ prop }}</p>
</template> 


<!-- //use reactive

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'

const route = useRoute()


const state = reactive({
  userId: route.params.id as string,   // params सधैं string हुन्छ
  referrer: route.query.from as string | undefined
})

onMounted(() => {
  console.log('UserPage mounted, ID:', state.userId, 'Query:', state.referrer)
})
</script>

<template>
  <h1>User Details</h1>
  <p>User ID: {{ state.userId }}</p>
  <p>Referrer: {{ state.referrer }}</p>
</template> -->
