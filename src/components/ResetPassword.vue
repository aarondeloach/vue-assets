<script setup>
import { ref } from 'vue'

import { FormInput } from '@/components'

const emit = defineEmits(['submit'])

const props = defineProps({
    
    loginRoute: {
        type: String,
        default: '/login'
    },
    forgotPasswordRoute: {
        type: String,
        default: '/forgot-password'
    },
    loading: {
        type: Boolean,
        default: false
    }
})

const data = ref({
    password: '',
    confirm: ''
})


const errors = ref({})


const submit = () => {

    errors.value = {}

    if (!data.value.password) {
        errors.value.password = 'Password required';
    }
    if (!data.value.confirm) {
        errors.value.confirm = 'Password confirmation required';
    }

    if(data.value.password && data.value.confirm && data.value.password !== data.value.confirm) {
        errors.value.confirm = 'Passwords do not match';
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

            <h2 class="h4 mb-3 fw-normal text-center">Reset password</h2>

            <FormInput id="password" label="New Password" v-model="data.password" :error="errors.password" type="password" />


            <FormInput id="confirm" label="Confirm new password" v-model="data.confirm" :error="errors.confirm" type="password"
                class="mt-3 mb-3" />

        
            <button class="btn btn-primary w-100 py-2 mt-4" type="submit" :disabled="loading">
               <span v-if="loading" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
               <span v-else>Reset</span>
            </button>

            <div class="mt-3 mb-3 text-body-secondary text-center">
                <div><a :href="forgotPasswordRoute">Need a new email?</a></div>
                <div class="mt-2"><a :href="loginRoute">Remembered password?</a></div>
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