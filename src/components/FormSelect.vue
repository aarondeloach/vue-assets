<script setup>
const props = defineProps({
  id: String,
  label: String,
  options: {
    type: Array,
    required: true,
    default: []
  },
  selected: String,
  error: String,
  help: String,
});
</script>

<template>

<div>
  <label v-if="label" :for="id" class="form-label">{{ label }}</label>
  <select :id="id" class="form-select" :class="{ 'is-invalid': error }" aria-label="{{  $attrs.placeholder ?  $attrs.placeholder : 'Select' }}">
    <option v-if="$attrs.placeholder" selected>{{ $attrs.placeholder }}</option>
    <option v-for="option in options" :key="option.id" :value="option.id">{{ option.title }}</option>
  </select>
  <div v-if="error" class="invalid-feedback">
          {{ error }}
      </div>
      <div v-if="help" class="form-text">{{ help }}</div>
</div>

</template>


<style scoped></style>