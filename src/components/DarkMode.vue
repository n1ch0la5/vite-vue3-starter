<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
    <button
        @click="toggleDark()"
        class="rounded bg-indigo-500 text-gray-50 px-4 py-2 dark:bg-gray-900">
    Toggle Darkmode
    </button>
</template>