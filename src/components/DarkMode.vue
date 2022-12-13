<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
    <button
        @click="toggleDark()"
        class="rounded bg-indigo-500 hover:bg-indigo-400 text-gray-50 dark:bg-gray-900 border border-transparent dark:hover:border-[#646cff] py-2 px-6 text-base font-normal cursor-pointer transition-all duration-150">
    Toggle Darkmode
    </button>
</template>