<script setup>
const props = defineProps({
  homepageRoute: {type: String, default: "/"},
  pageHeader: {type: String, default: "Internal Server Error."},
  pageText: {type: String, default: "We're already working to solve the problem."},
  buttonText: {type: String, default: "Back to Homepage"}
})
</script>

<template>

    <section class="py-5 px-3 mx-auto text-center">

        <h1 class="mb-4 display-1 fw-bold text-primary">500</h1>
        <p class="mb-4 display-4 fw-bold">{{ pageHeader }}</p>
        <p class="mb-4 fs-4 fw-light text-muted">{{ pageText }}</p>
        <a :href="homepageRoute" class="btn btn-primary my-4">{{ buttonText }}</a>

    </section>

</template>

<style scoped></style>