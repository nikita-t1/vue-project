<template>
  <div>
    <header
        class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-slate-50 text-sm py-2 md:py-0 dark:bg-dark">
      <nav class="container w-full mx-auto px-4 md:flex md:items-center md:justify-between" aria-label="Global">
        <div class="flex items-center justify-between">
          <a class="flex-none text-xl font-semibold dark:text-white text-blue-500" href="#">nikitatarasov.dev</a>
          <div class="md:hidden">
            <button type="button"
                    class="hs-collapse-toggle p-2.5 mx-2 inline-flex justify-center items-center rounded-md border font-medium bg-white text-gray-700 shadow-sm  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation"
                    aria-label="Toggle navigation">
              <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                   viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
              <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                   viewBox="0 0 16 16">
                <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
            <button @click="toogleDarkMode" id="theme-toggle" type="button"
                    class="self-center justify-center items-center inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 ">
              <svg id="theme-toggle-dark-icon" :class="{hidden: useDarkMode}" width="16" height="16" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg id="theme-toggle-light-icon" :class="{hidden: !useDarkMode}" width="16" height="16" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
        <div id="navbar-collapse-with-animation"
             class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
          <div class="flex flex-col gap-5 mb-5 md:mb-0 mt-5 md:flex-row md:items-center md:justify-end sm:mt-0 md:pl-5">
            <router-link to="/" class="navElement">Home</router-link>
            <router-link to="/about" class="navElement">About Me</router-link>

            <a href="#" @click="showAlert( $event)" class="navElement">Blog</a>
            <a href="#" @click="showAlert( $event)" class="navElement">Projects</a>
            <a href="#" @click="showAlert( $event)" class="navElement">Contact</a>
            <a href="#" @click="showAlert( $event)" class="navElement">Login</a>

            <button @click="toogleDarkMode" id="theme-toggle" type="button"
                    class="hidden md:block self-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 m-2">
              <svg id="theme-toggle-dark-icon" :class="{hidden: useDarkMode}" class="w-5 h-5" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg id="theme-toggle-light-icon" :class="{hidden: !useDarkMode}" class=" w-5 h-5" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>


  </div>
</template>


<script lang="ts">
import {useNotImplementedAlertStore} from '../stores/notImplementedAlert'
import {useToogleDarkModeStore} from '../stores/toogleDarkModeStore'

import {useRouter, useRoute} from 'vue-router'
import {onMounted, watch, ref} from 'vue';

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    var useDarkMode = ref(false)

    onMounted(() => {
      if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        useDarkMode.value = true;
      } else {
        useDarkMode.value = false;
      }
      useToogleDarkModeStore().useDarkMode = useDarkMode.value
    })

    function showAlert(event: any) {
      useNotImplementedAlertStore().showAlert(event.target.innerHTML)
    }

    function toogleDarkMode() {
      useDarkMode.value = !useDarkMode.value
      useToogleDarkModeStore().toogle()
    }

    return {showAlert, toogleDarkMode, useDarkMode}
  }
}

</script>

<style scoped>

.navElement:not([aria-current="page"]) {
  @apply font-bold block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent;
}

.navElement[aria-current="page"] {
  @apply font-bold block py-2 pr-4 pl-3 text-white rounded md:bg-transparent text-blue-500 md:p-0 dark:text-white
}


</style>