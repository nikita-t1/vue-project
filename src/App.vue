<script lang="ts" setup>
import TopBar from './components/TopBar.vue'
import Footer from './components/Footer.vue'
import {useNotImplementedAlertStore} from './stores/notImplementedAlert'

const store = useNotImplementedAlertStore()
store.$reset()

</script>

<template>
    <div class="h-screen dark:bg-dark bg-slate-50 flex flex-col">
        <TopBar/>
        <router-view class="h-full flex"></router-view>
        <Footer/>

        <div v-for="count in store.count" class="grid place-items-center">

            <div
                :style="{ 'bottom': (count *4) + 'rem' }"
                class=" absolute z-40  items-center mx-auto text-center p-4 max-w-xs outline-blue-500 outline-none outline-1 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                <div class="text-sm font-normal text-center">
                    <span class="underline">{{ store.alertTextList[count - 1] }}</span> is not yet implemented
                </div>

            </div>


        </div>
    </div>
</template>
