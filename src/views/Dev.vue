<script setup>
import SignupActivation from '../components/SignupActivation.vue';

</script>

<template>

    <div class="mt-5"></div>

    <SignupActivation :success="true">
        <template #logo>
            <h1>Backstack</h1>
        </template>
    </SignupActivation>

</template>


<style scoped>

</style>