<script setup>
import { ref } from "vue";
const to = ref("");
const message = ref("");

function handleSubmit() {
  const link = `https://wa.me/${to.value.replace("+", "")}?text=${
    message.value
  }`;
  openLink(link);
}

// Open link in new tab
function openLink(link) {
  window.open(link, "_blank");
}
</script>

<template>
  <Title>WhatsWeb - Send whatsapp message without storing contact</Title>
  <div class="body">
    <div
      class="
        container
        mx-auto
        md:h-screen
        flex flex-wrap
        md:flex-nowrap
        justify-between
        gap-10
        items-center
        p-5
        md:p-0
      "
    >
      <div class="w-full md:w-1/2">
        <Header class="mb-10" />
        <form @submit.prevent="handleSubmit">
          <input-field
            type="tel"
            v-model="to"
            :required="true"
            placeholder="Please enter number with country code +916295000042"
            class="mb-5"
          />
          <input-field
            v-model="message"
            :required="true"
            :text-area="true"
            placeholder="Enter your message"
            class="mb-5"
          />
          <btn label="Send Message" />
        </form>
      </div>
      <div class="w-full md:w-1/2">
        <preview :to="to" :message="message" />
      </div>
    </div>
  </div>
</template>

<style>
.container {
  @apply lg:max-w-6xl;
}
.body {
  @apply bg-greenLight dark:bg-greenDark;
}
</style>
