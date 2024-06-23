<script setup>
import SignupForm from '../components/SignupForm.vue';
import countries from '../assets/data/countries.json';

</script>

<template>

    <SignupForm @submit="(data) => console.log(data)" :countries="countries">
        <template #logo>
            <h1>Backstack</h1>
        </template>
    </SignupForm>

</template>


<style scoped>

</style>