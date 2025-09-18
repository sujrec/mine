<script setup lang="ts">
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

//create ref to access child
const childRef = ref<InstanceType<typeof ChildComp> | null>(null)

//parent method to call childs method
function callChild() {
    childRef.value?.showMessage()
}
</script>

<template>
    <div>
        <h1>I am parent</h1>
        <ChildComp ref="childRef">
        <button @click="callChild">Call Child Method</button>
        </ChildComp>
    </div>
</template>