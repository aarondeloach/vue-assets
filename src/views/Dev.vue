<script setup>
import Signup from '../components/Signup.vue';

</script>

<template>

    <Signup @submit="(data) => console.log(data)">
        <template #logo>
            <h1>Backstack</h1>
        </template>
    </Signup>

</template>


<style scoped>

</style>