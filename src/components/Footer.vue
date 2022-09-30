<template>


<div class="container justify-between justify-items-center">
    <footer class="fixed bottom-0 w-full mx-auto z-20 bg-white  border-gray-200 shadow dark:bg-dark dark:border-gray-600 border-t">

        <div class="container flex flex-wrap justify-between items-center mx-auto px-4">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">Created by Nikita Tarasov in 2022</span>
            <ul class="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 py-3">
                <li  class="sm:px-4 px-1">
                    <BootstrapIcon icon="bi-github" link="https://github.com/nikita-t1"/>
                </li>
                <li class="sm:px-4 px-1">
                    <BootstrapIcon icon="bi-linkedin" link="https://www.linkedin.com/in/nikita-t-481a33237"/>
                </li>
                <li  class="sm:px-4 px-1">
                    <BootstrapIcon icon="bi-stack-overflow" link="https://stackoverflow.com/users/19864865/nikita-t1"/>
                </li>
            </ul>
        </div>
    </footer>
</div>

</template>

<script setup lang="ts">
import BootstrapIcon from './BootstrapIcon.vue'

</script>

<style scoped>

</style>
