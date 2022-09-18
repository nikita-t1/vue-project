<template>
    <div>
        <h3>Calculator</h3>
        <form>
            <input type="number" v-model="num1" >
            <input type="number" v-model="num2">
        </form>
        <p>Result: {{ sum }}</p>
        <strong>Meow Fact: </strong>
        <p>{{ fact }}</p>
    </div>
</template>
<script>
import { ref, computed, watchEffect } from 'vue';

export default {
    setup() {
        const num1 = ref(0);
        const num2 = ref(0);
        const fact = ref('');
        const sum = computed(() => parseInt(num1.value, 10) + parseInt(num2.value, 10));

        watchEffect(async () => {
            const res = await fetch(`https://meowfacts.herokuapp.com/?id=${sum.value}`);
            const json = await res.json()
            fact.value = json["data"][0]
        });

        return {
            num1,
            num2,
            fact,
            sum,
        };
  },
}
</script>
<style></style>