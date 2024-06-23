<script setup>
import { ref } from 'vue'

const props = defineProps({
    id: String,
    label: String,
    options: {
        type: Array,
        // required: true,
        default: [
            { id: 'foo', label: 'Foo', description: 'this is a long item description designed to wrap within the dropdown' },
            { id: 'bar', label: 'Bar', description: 'another action this is a long item description designed to wrap within the dropdown' },
            { id: 'baz', label: 'Baz', description: 'yet another option else here' },
        ]
    },
    selected: 'bar',
    error: String,
    help: String,
    placeholder: {
        type: String,
        default: 'Select'
    }
});


const handleClick = (option) => {
    console.log('clicked', option);
}

</script>

<template>

 


        <div class="is-invalid">
            <label v-if="label" :for="id" class="form-label">{{ label }}</label>
            <div :id="id" class="dropdown d-flex justify-content-between align-items-center">
                <a class="btn btn-secondary dropdown-toggle w-100 d-flex justify-content-between align-items-center border-0"
                    href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>{{ placeholder }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                        class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </a>

                <ul class="dropdown-menu">
                    <li v-for="option in options" :key="option.id"><a @click.prevent="handleClick(option)"
                            class="dropdown-item mt-1" href="javascript:void(0)">{{ option.description ? option.label +
                                ' - ' +
                                option.description : option.label }}</a></li>
                </ul>

                <div v-if="error" class="invalid-feedback">
                    {{ error }}
                </div>

                <div v-if="help" class="form-text">{{ help }}</div>
            </div>
        </div>
    
</template>



<style scoped>
/*
:root {
    
    --dropdown-bg: var(--bs-light);
    --dropdown-color: var(--bs-dark);
}


@media (prefers-color-scheme: dark) {
    :root {
        --dropdown-bg: var(--bs-dark);
        --dropdown-color: var(--bs-light);
    }
}
*/





.dropdown-menu {
    max-height: 400px;
    overflow-y: auto;
}
.dropdown-item {
    white-space: normal;
    overflow-wrap: break-word;
}
.dropdown-toggle::after {
    display: none;
}

.dropdown {
    width: 100%;
    border: var(--bs-border-width) solid var(--bs-border-color);
    border-radius: var(--bs-border-radius);
}

.dropdown-toggle {
    justify-content: space-between;
    background-color: var(--dropdown-bg);
    color: var(--dropdown-color);
}
.dropdown-toggle:active, .dropdown-toggle:focus {
    background-color: var(--dropdown-bg);
    border-color: var(--dropdown-bg);
    box-shadow: 0 0 0 0.3rem var(--bs-focus-ring-color);
}
[data-bs-theme="light"] .dropdown-item:hover {
    background-color: #3c3632ad;
    color: #f2f2f2;
}

[data-bs-theme="dark"] .dropdown-item:hover {
    background-color:#f0eded;
    color: #333;
}

</style>