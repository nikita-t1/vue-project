<script setup lang="ts">
import AboutMe from './components/AboutMe.vue'
import TopBar from './components/TopBar.vue'
import Footer from './components/Footer.vue'
import { useNotImplementedAlertStore } from './stores/notImplementedAlert'

const store = useNotImplementedAlertStore()
store.$reset()

</script>

<template>
  <div class="h-screen dark:bg-slate-800">
    <TopBar />
    <router-view></router-view>

    <Footer />

    <div v-for="count in store.count" class="grid place-items-center">
      
      <div class=" absolute z-40  items-center mx-auto text-center p-4 max-w-xs outline-blue-500 outline-none outline-1 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" :style="{ 'bottom': (count *4) + 'rem' }" role="alert">
          <div class="text-sm font-normal text-center">
            <span class="underline">{{store.alertTextList[count-1]}}</span> is not yet implemented
          </div>
          
      </div>


    </div>
  </div>
</template>
