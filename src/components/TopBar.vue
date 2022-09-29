<template>
    <div>
        <nav class="bg-white border-gray-200 sm:px-4 py-2.5 dark:bg-slate-700">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="#" class="flex items-center">
                <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"> -->
                <span class="self-center font-semibold whitespace-nowrap dark:text-white">nikitatarasov.dev</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-slate-700 ">
                    <li>
                        <a href="#" class="font-bold block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-blue-500 md:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" @click="showAlert( $event)">About Me</a>
                    </li>
                    <li>
                        <a href="#" @click="showAlert( $event)">Blog</a>
                    </li>
                    <li>
                        <a href="#" @click="showAlert( $event)">Projects</a>
                    </li>
                    <li>
                        <a href="#" @click="showAlert( $event)">Contact</a>
                    </li>
                    <li>
                        <a href="#" @click="showAlert( $event)">Login</a>
                    </li>
                    <label for="toggle" class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" id="toggle" class="sr-only peer">
                    <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 dark:peer-focus:ring-indigo-300 rounded-full peer dark:bg-slate-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white dark:bg-slate-500 after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-400 peer-checked:bg-indigo-600"></div>
                </label>
                </ul>
            </div>
        </div>
        </nav>

    </div>
</template>


<script lang="ts">
import { useNotImplementedAlertStore } from '../stores/notImplementedAlert'
export default {
    setup(){
        function showAlert(event: any){                        
            useNotImplementedAlertStore().showAlert(event.target.innerHTML)
        }
        return {showAlert}
    }
}

</script>

<style scoped>

li a:not([aria-current="page"]){
    @apply font-bold block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent;
}

</style>