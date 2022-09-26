<template>
  <!-- Profile Card -->
  <div id="bg-image" class="">
    <div class="md:w-1/3">
      <img class="rounded-3xl shadow-lg antialiased" src="https://octodex.github.com/images/privateinvestocat.jpg"/>
    </div>
    <div class="md:w-2/3  px-3 flex flex-row flex-wrap">
      <div
        class="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
        <div class="text-2xl text-white leading-tight">Nikita Tarasov</div>
        <!-- <div
          class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer">
          <span class="border-b border-dashed border-gray-500 pb-1">Administrator</span>
        </div> -->
        <div id="last-seen">Last Seen: <b>{{ lastSeen }} days ago</b></div>
      </div>
    </div>
  </div>
  <!-- End Profile Card -->
</template>
<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";

export default defineComponent({
  setup() {
    const lastSeen = ref(5);

    watchEffect(async () => {
      const res = await fetch(
        `https://api.github.com/users/nikita-t1/events?per_page=1`
      );
      const json = await res.json();
      const date = Date.parse(json[0]['created_at']);
      console.log(date);
      
      const diffInTime = new Date().getTime() - date;
      const oneDay = 1000 * 60 * 60 * 24;
      lastSeen.value = Math.round(diffInTime / oneDay);
    });

    return {
      lastSeen,
    };
  },
});
</script>

<style scoped>
#bg-image {
  @apply rounded-lg shadow-lg bg-gray-600 flex flex-row flex-wrap p-3 antialiased;
  background-image: url("/browser-console.png");
  background-repeat: no-repat;
  background-size: cover;
  background-blend-mode: multiply;
}
#last-seen {
  @apply text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0;
}
</style>
