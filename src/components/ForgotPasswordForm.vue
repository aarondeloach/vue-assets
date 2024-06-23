<!-- 
 This form is intended to be placed within a container controlled by the 
 parent component to determine its final dimensions and positioning. 
 -->


<script setup>
import { ref } from 'vue'

import { FormInput } from '@/components'

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
    errors: {
        type: Object,
        default: {}
    },
    showSuccess: {
        type: Boolean,
        default: false
    }
})

const data = ref({
    email: ''
})


</script>

<template>


    <form novalidate @submit.prevent="emit('submit', data)" class="signin-form">

        <div class="text-center">
            <slot name="logo"></slot>
        </div>

        <h2 class="h4 mb-3 fw-normal text-center">Lookup Password</h2>

        <div v-if="showSuccess" class="text-center">

            <h5 class="mt-4 mb-4 fw-normal">Check your email!</h5>
            <p> Password recovery instructions have been sent to your email address. </p>
        
        </div>
        
        <div v-else>
            <FormInput id="email" label="Email" v-model="data.email" :error="errors.email" type="email"
                help="An email with a reset password link will be sent to the address provided." class="mb-3" />


            <button class="btn btn-primary w-100 py-2 mt-4" type="submit" :disabled="loading">
                <span v-if="loading" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span v-else>Send Email</span>
            </button>

            <div class="mt-3 mb-3 text-body-secondary text-center">
                <div><a :href="loginRoute">Remembered?</a></div>
            </div>
        </div>
    </form>
</template>


<style scoped></style>