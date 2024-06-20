<script setup>
import { ref } from 'vue'

import { FormInput, FormSelect, SelectExtended } from '@/components'
import { validateEmail } from '../../public/js/validateEmail';
import  countries  from '@/data/countries.json';

const emit = defineEmits(['submit'])

const props = defineProps({
    loginRoute: {
        type: String,
        default: '/login'
    },
    loading: {
        type: Boolean,
        default: false
    },
})

const data = ref({
    username: '',
    password: '',
    email: '',
    account_title: '',
    name: '',
    country_id: '',
})


const errors = ref({})


const submit = () => {

    errors.value = {}

    if (!data.value.email) {
        errors.value.email = 'Email required';
    } else if (!validateEmail(data.value.email)) {
        errors.value.email = 'Invalid email address';
    }

    if (Object.keys(errors.value).length > 0) {
        return;
    }
    emit('submit', data.value);
};


</script>

<template>

    <main class="d-flex justify-content-center align-items-center">

        <form novalidate @submit.prevent="submit" class="form-signin">

            <div class="text-center">
                <slot name="logo"></slot>
            </div>

            <h2 class="h4 mb-3 fw-normal text-center">Sign Up</h2>


            <FormInput placeholder="Name" id="name" v-model="data.name" :error="errors.name" />

            <FormInput id="email" placeholder="Email" v-model="data.email" :error="errors.email" type="email"
                class="mt-3" />

            <FormInput placeholder="Username" id="username" v-model="data.username" :error="errors.username"
                class="mt-3" />

            <FormInput placeholder="Password" id="password" v-model="data.password" :error="errors.password"
                type="password" class="mt-3" />

            <FormInput placeholder="Company" id="account_title" v-model="data.account_title"
                :error="errors.account_title" class="mt-3" />



            

<SelectExtended placeholder="Access" class="mt-3" />





            <FormSelect id="country_id" placeholder="Country" v-model="data.country_id" :error="errors.country_id" :options="countries" class="mt-3 mb-3" />


            <button class="btn btn-primary w-100 py-2 mt-4" type="submit" :disabled="loading">
                <span v-if="loading" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span v-else>Create Account</span>
            </button>

            <div class="mt-3 mb-3 text-body-secondary text-center">
                <div><a :href="loginRoute">Already have an account?</a></div>
            </div>

        </form>
    </main>
</template>


<style scoped>
.d-flex {
    display: flex;
    justify-content: center;
    align-items: center;

    /* full height of viewport */
    height: 100vh;
}

.form-signin {
    max-width: 350px;
    width: 100%;

    /* center form horizontally */
    margin: auto;
}
</style>