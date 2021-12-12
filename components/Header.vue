<script setup>
import { ref } from "vue";
const title = ref("Send WhatsApp message without saving contact number");
</script>

<template>
  <div class="header">
    <slot name="title">
      <h1
        class="
          text-2xl
          md:text-4xl
          text-center
          md:text-left
          text-greenDark
          dark:text-greenLight
          font-bold
        "
      >
        {{ title }}
      </h1>
    </slot>
    <slot></slot>
  </div>
</template>

<style></style>
