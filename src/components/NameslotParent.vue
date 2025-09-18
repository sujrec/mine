<template>
    <NamesslotChild>
        <template #header>
            <h2>Custom header from Parent</h2>
        </template>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam, nesciunt ipsum enim, aperiam distinctio aut magni magnam eos a obcaecati odio eum tempore, ex eveniet reprehenderit excepturi id accusamus!</p>

        <template #footer>
            <small>custome Footer from parent</small>
        </template>
    </NamesslotChild>
</template>

<script setup lang="ts">
 import NamesslotChild from './NamesslotChild.vue'
</script>