<template>
        <div class="sm:px-4 dark:bg-slate-700 flex">
            <div id="main">
                <h1>Hi, I'm <b>Nikita Tarasov</b></h1>
                <h1>Self taught Developer</h1>

            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style scoped>
#main {
  @apply text-left container flex flex-col justify-between items-start mx-auto py-20;
}

h1 {
    @apply text-4xl font-extrabold leading-loose
}

h1 b {
    @apply text-blue-500
}

</style>
