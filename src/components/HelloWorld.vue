<script setup>
//import { ref } from 'vue'
import { useCounterStore } from "../store";
import { storeToRefs } from "pinia";

defineProps({
  title: String,
  description: String,
})

const store = useCounterStore();
const { count, double } = storeToRefs(store);
const { increment, reset } = store;
//const count = ref(0)
</script>

<template>
  <h1 class="mt-10 mb-1 font-bold text-5xl">{{ title }}</h1>
  <p class="text-lg mb-4 italic text-gray-600 dark:text-gray-300">{{ description }}</p>

  <div class="flex justify-center items-center">
    <a href="https://tailwindcss.com/docs/installation" target="_blank">
      <img src="../assets/tailwind.svg" class="p-3 h-[76px] will-change-[filter] hover:drop-shadow-[0_0_18px_rgba(5,182,213,0.67)]" alt="Tailwind logo" />
    </a>
    <a href="https://pinia.vuejs.org/introduction.html" target="_blank">
      <img src="../assets/pinia.svg" class="p-3 h-[76px] will-change-[filter] hover:drop-shadow-[0_0_18px_rgba(255,226,104,0.67)]" alt="Pinia logo" />
    </a>
  </div>

  <div class="card p-8">
    <button type="button" 
    @click="increment"
    class="rounded bg-indigo-500 hover:bg-indigo-400 text-gray-50 dark:bg-gray-900 border border-transparent dark:hover:border-[#646cff] py-2 px-6 text-base font-normal cursor-pointer transition-all duration-150"
    >count is {{ count }} ({{ double }})</button>
    <p class="text-indigo-400 hover:text-indigo-500 cursor-pointer mt-1"
      @click="reset">
      reset
    </p>
    <p class="my-4">
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
     <p class="my-4">
      Set persist to true in <code>store/index.js</code> to persist store data
    </p>
  </div>
 

  <p class="my-4">
    Check out
    <a class="text-indigo-400 hover:text-indigo-500" href="https://tailwindcss.com/docs/installation" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p class="my-4">
    Install
    <a class="text-indigo-400 hover:text-indigo-500" href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="text-gray-500">Click on the Vite and Vue logos to learn more</p>
</template>
