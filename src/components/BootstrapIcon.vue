<template>
    <div>
        <a v-bind:href="link">
            <i class="bi text-lg" :class="icon"></i>
        </a>
    </div>
</template>

<script setup lang="ts">
defineProps<{ 
    icon: string,
    link: string
 }>()

</script>