<template>
    <Link :href="href" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100">
        <slot />
    </Link>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3';
const props = defineProps({
    href: {
        type: String,
        required: true
    }
})
</script>
