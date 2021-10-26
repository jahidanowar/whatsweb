<script setup>
defineProps({
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: String,
  },
  placeholder: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  textArea: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);
const emitText = (e) => {
  const { value } = e.target;
  emit("update:modelValue", value);
};
</script>

<template>
  <input
    v-if="!textArea"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    @input="emitText"
    class="
      w-full
      rounded-lg
      px-4
      py-3
      placeholder-greenSemiDark
      bg-green-100
      text-greenSemiDark
      dark:bg-green-800 dark:text-greenLight
      border border-greenPrimary
    "
  />
  <textarea
    v-else
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    @input="emitText"
    class="
      w-full
      rounded-lg
      px-4
      py-3
      placeholder-greenSemiDark
      bg-green-100
      text-greenSemiDark
      dark:bg-green-800 dark:text-greenLight
      border border-greenPrimary
    "
  ></textarea>
</template>

<style></style>
