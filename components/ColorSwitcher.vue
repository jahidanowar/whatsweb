<script setup>
import { UseDark } from "@vueuse/components";
</script>
<template>
  <div>
    <UseDark v-slot="{ isDark, toggleDark }">
      <button @click="toggleDark()">
        {{ isDark ? "Dark" : "Light" }}
      </button>
    </UseDark>
  </div>
</template>
<style></style>
