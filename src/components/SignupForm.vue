<!-- 
 This form is intended to be placed within a container controlled by the 
 parent component to determine its final dimensions and positioning. 
 -->


<script setup>
import { ref } from 'vue'

import { FormInput, FormSelect } from '@/components'
import countries from '@/assets/data/countries.json';

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
        required: true,
        default: {}
    },
    countries: {
        type: Array,
        required: true,
        default: []
    },
    domains: {
        type: Array,
        required: true,
        default: []
    }
})


const data = ref({
    username: '',
    password: '',
    email: '',
    account_title: '',
    name: '',
    country_id: '',
    domain_id: props.domains.length === 1 ? props.domains[0].id : ''
})

const selectedDomain = ref({})

const handleClick = (domain) => {
    selectedDomain.value = domain;
    data.value.domain_id = domain.id;
}


</script>

<template>

    <form novalidate @submit.prevent="emit('submit', data)" class="signin-form">

        <div class="text-center">
            <slot name="logo"></slot>
        </div>

        <h2 class="h4 mb-3 fw-normal text-center">Sign Up</h2>


        <FormInput placeholder="Name" id="name" v-model="data.name" :error="errors.name" />

        <FormInput id="email" placeholder="Email" v-model="data.email" :error="errors.email" type="email"
            class="mt-3" />

        <FormInput placeholder="Username" id="username" v-model="data.username" :error="errors.username" class="mt-3" />

        <FormInput placeholder="Password" id="password" v-model="data.password" :error="errors.password" type="password"
            class="mt-3" />

        <FormInput placeholder="Company" id="account_title" v-model="data.account_title" :error="errors.account_title"
            class="mt-3" />



        <div v-if="domains.length > 1" class="dropdown mt-3 w-100">
            <button :class="[errors?.domain_id ? 'invalid-border' : '', 'btn btn-secondary dropdown-toggle w-100']"
                type="button" data-bs-toggle="dropdown" aria-expanded="false">Account type
                {{ selectedDomain.title ? ': '+ selectedDomain.title : '' }}{{ ' ' }}
            </button>
            <ul class="dropdown-menu w-100">
                <li v-for="domain in domains" :key="domain.id"><a @click.prevent="handleClick(domain)"
                        class="dropdown-item mt-1" href="javascript:void(0)">{{ domain.description ? `${domain.title} -
                        ${domain.description}` : domain.title }}</a></li>
            </ul>
            <div v-if="errors?.domain_id?.length > 0" class="invalid-text">
                {{ errors.domain_id }}
            </div>
        </div>


        <FormSelect id="country_id" placeholder="Country" v-model="data.country_id" :error="errors.country_id"
            :options="countries" class="mt-3 mb-3" />


        <button class="btn btn-primary w-100 py-2 mt-4" type="submit" :disabled="loading">
            <span v-if="loading" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span v-else>Create Account</span>
        </button>

        <div class="mt-3 mb-3 text-body-secondary text-center">
            <div><a :href="loginRoute">Already have an account?</a></div>
        </div>

    </form>
</template>


<style scoped>
.invalid-text {
    font-size: 0.875em;
    margin-top: 0.25rem;
    color: var(--bs-form-invalid-color);
}

.invalid-border {
    border-color: var(--bs-form-invalid-color);
}

.dropdown-item {
    white-space: normal;
    overflow-wrap: break-word;
}
</style>