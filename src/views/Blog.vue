<template>
    <ul>
        <li v-for="(item, index) in blogRoutes">
            <div class="flex justify-between w-full">
                {{ formatPath(item.path) }}
                <router-link :to="{ path: item.path }">Read -></router-link>
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import router from "../routes"

const blogRoutes = router.getRoutes()
    .filter( (route) => {
        return route.path.includes("blog/")
    })

console.log(blogRoutes)

function formatPath(fullPath: string){
    const path = fullPath.replaceAll("/blog/", "").replaceAll("-", " ");
    const words = path.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");

}

</script>

<style scoped>

a {
    @apply inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white
}

ul {
    @apply max-w-xs flex flex-col self-center justify-center py-12 px-4 sm:px-6 lg:px-8 w-full
}

li {
    @apply inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white
}

</style>
