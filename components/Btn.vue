<script setup>
defineProps({
  label: {
    type: String,
    default: "Submit",
  },
});
</script>

<template>
  <button
    class="
      w-full
      rounded-lg
      py-3
      px-5
      text-center
      bg-greenPrimary
      text-greenLight
    "
  >
    {{ label }}
  </button>
</template>
