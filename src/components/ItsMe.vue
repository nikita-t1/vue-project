<template>
    <div class="sm:px-4 dark:bg-dark flex bg-slate-50">
        <div id="main">
            <div class="flex md:flex-row flex-col justify-evenly items-center">
                <div>
                    <h1>Hi, I'm <b>Nikita Tarasov</b></h1>
                    <h1>Self taught Developer</h1>
                </div>
                <img class="rounded-full antialiased border-gray-600 border-2 aspect-auto md:w-1/6  w-1/3 mt-5 md:mt-0"
                     src="https://octodex.github.com/images/privateinvestocat.jpg"/>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
#main {
    @apply text-center container flex flex-col justify-between items-center mx-auto py-20;
}

h1 {
    @apply text-4xl font-extrabold leading-loose text-slate-800 dark:text-slate-50
}

h1 b {
    @apply text-blue-500 whitespace-nowrap
}

</style>
