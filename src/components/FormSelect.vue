<script setup>
import { watch, computed } from 'vue';

const props = defineProps({
  id: String,
  label: String,
  options: {
    type: Array,
    required: true,
    default: []
  },
  error: String,
  help: String,
  placeholder: {
    type: String,
    default: 'Select'
  }
});

const emit = defineEmits(['update:modelValue']);

const modelValue = defineModel('modelValue');

if (modelValue.value === undefined) {
  emit('update:modelValue', ''); // or null, depending on your needs
}

// Computed property to check if modelValue is empty
const isModelEmpty = computed(() => modelValue.value === '' || modelValue.value === null);


// Watch for changes in modelValue, if it becomes empty, you can reset it to the placeholder's value
watch(modelValue, (newValue) => {
  if (newValue === null || newValue === '') {
    emit('update:modelValue', ''); // Reset to placeholder value if needed
  }
});
</script>

<template>
  <div>
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <select :id="id" v-model="modelValue" class="form-select" :class="{ 'is-invalid': error }"
      :aria-label="placeholder">
      <!-- Placeholder option -->
      <option disabled value="">{{ placeholder }}</option>
      <!-- Options -->
      <option v-for="option in options" :key="option.id" :value="option.id">{{ option.title }}</option>
    </select>
    <div v-if="error" class="invalid-feedback">{{ error }}</div>
    <div v-if="help" class="form-text">{{ help }}</div>
  </div>
</template>