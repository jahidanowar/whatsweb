<script setup>
defineProps({
  to: {
    type: String,
  },
  message: {
    type: String,
  },
});
</script>

<template>
  <div
    class="
      preview
      mx-auto
      overflow-hidden
      shadow-xl
      flex flex-col
      justify-between
      relative
      w-[250px]
      h-[300px]
      md:w-[340px] md:h-[600px]
      rounded-5xl
      border-[10px] border-greenPrimary
      bg-green-100
      dark:bg-green-900
    "
  >
    <div
      class="
        preview__header
        flex
        items-center
        px-5
        py-3
        bg-green-300
        dark:bg-green-700
      "
    >
      <div class="avatar rounded-full bg-greenPrimary h-8 w-8 mr-2"></div>
      <transition name="slide-fade">
        <div v-if="to" class="text-greenDark dark:text-greenLight">
          {{ to }}
        </div>
      </transition>
    </div>
    <transition name="slide-fade">
      <div
        v-if="message"
        class="
          bubble
          absolute
          bottom-20
          right-5
          md:right-8
          py-5
          px-4
          rounded-lg rounded-tr-none
          w-[200px]
          bg-greenSemiDark
          text-greenLight
        "
      >
        <p class="w-full overflow-ellipsis overflow-hidden text-sm">
          {{ message }}
        </p>
      </div>
    </transition>
    <div
      class="
        preview__footer
        flex
        items-center
        gap-2
        px-5
        py-3
        bg-green-300
        dark:bg-green-700
      "
    >
      <div
        class="
          w-4/5
          rounded-full
          p-3
          border
          bg-green-400
          dark:bg-greenSemiDark
          border-greenPrimary
        "
      ></div>
      <div
        class="
          w-1/5
          flex
          justify-between
          items-center
          text-greenSemiDark
          darl:text-greenPrimary
        "
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<style>
.bubble {
}
.bubble::before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 5px solid #059669;
  border-right: 5px solid transparent;
  border-top: 5px solid #059669;
  border-bottom: 5px solid transparent;
  right: -10px;
  top: 0px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
