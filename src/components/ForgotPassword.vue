<script setup>
import { ref } from 'vue'

import { FormInput } from '@/components'
import { validateEmail } from '../../public/js/validateEmail';

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
    email: ''
})


const errors = ref({})


const submit = () => {

    errors.value = {}

    if (!data.value.email) {
        errors.value.email = 'Email required';
    }else if (!validateEmail(data.value.email)) {
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

            <h2 class="h4 mb-3 fw-normal text-center">Lookup Password</h2>

            <FormInput id="email" label="Email" v-model="data.email" :error="errors.email" type="email" help="An email with a reset password link will be sent to the address provided." class="mb-3" />


            <button class="btn btn-primary w-100 py-2 mt-4" type="submit" :disabled="loading">
               <span v-if="loading" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
               <span v-else>Send Email</span>
            </button>

            <div class="mt-3 mb-3 text-body-secondary text-center">
                <div><a :href="loginRoute">Remembered?</a></div>
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