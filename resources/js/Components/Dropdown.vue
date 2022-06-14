<template>
  <div class="relative inline-block text-base">
     <button @click="toggleMenu" @keydown="handleEscape" class="relative z-10 flex items-center p-2 text-sm px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100">
        <span v-if="label" class="mx-1">{{label}}</span>
        <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
        </svg>
    </button>
    <div class="fixed z-40 inset-0 h-full w-full cursor-default" @click="toggleMenu" v-if="isOpen" ></div>
    <div
      v-if="isOpen"
      @click="toggleMenu"
      class="
        absolute z-50 right-0 mt-4 py-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg transform
      "
    >
      <slot name="menu" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const props = defineProps( {
    label: String
})

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleEscape = e => {
      if (['Esc', 'Escape'].includes(e.key)) {
        toggleMenu()
      }
    }

</script>
