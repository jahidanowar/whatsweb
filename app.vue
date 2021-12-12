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
  <Title>WhatsWeb - Send whatsapp message without saving contact number</Title>
  <Meta
    name="description"
    content="Whatsweb, An open source web app allows you to Send Direct Whatsapp mesages without adding contact number."
  ></Meta>
  <Meta
    name="google-site-verification"
    content="gUpNFCYPMLoIvNqESBJumXb1DzCvpN0CPMkZ8bEWIvs"
  />
  <div class="body">
    <div
      class="
        container
        mx-auto
        min-h-screen
        md:h-screen
        flex flex-wrap
        md:flex-nowrap
        flex-col-reverse
        md:flex-row
        justify-around
        md:justify-between
        items-center
        gap-10
        p-5
        md:p-0
      "
    >
      <color-switcher />
      <div class="w-full md:w-2/5">
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
      <div class="w-full md:w-3/5">
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
  min-height: 100vh;
}
</style>
