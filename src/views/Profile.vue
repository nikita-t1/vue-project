<template>
    <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md space-y-8">
            <h2>{{ name }}</h2>
            <form class="space-y-6" @submit.prevent="handleLogout">
                    <button type="submit">
                      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                        <!-- Heroicon name: mini/lock-closed -->
                        <svg aria-hidden="true" class="h-5 w-5 text-blue-400 group-hover:text-blue-500"
                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path clip-rule="evenodd"
                                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                fill-rule="evenodd"/>
                        </svg>
                      </span>
                        Logout
                    </button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import {supabase} from "../supabase";
import router from "../routes"

export default {
    setup() {
        if (supabase.auth.user() == null){
            router.push({ path: "/login"})
        } else {
            const name = supabase.auth.user()!.email;

            function handleLogout(){
                supabase.auth.signOut()
            }

            return {
                name,
                handleLogout
            };
        }
    },
};
</script>

<style scoped>
h2 {
    @apply mt-6 text-center text-3xl font-bold tracking-tight dark:text-white text-gray-700
}
button {
    @apply relative flex w-full justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
}
</style>