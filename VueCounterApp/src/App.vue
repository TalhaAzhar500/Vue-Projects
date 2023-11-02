<script setup>
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value = count.value + 1;
};

const decrement = () => {
  if (count.value === 0) {
    return;
  }
  count.value = count.value - 1;
};
</script>

<template>
  <main>
    <div>
      <h4>The Current Count is...</h4>
      <h1>{{ count }}</h1>
      <button @click="decrement">-</button>
      <button @click="increment">+</button>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: aliceblue;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
div {
  text-align: center;
}
button {
  padding: 10px 15px;
  margin: 20px;
}
</style>
