<script setup>
import { useRouter } from "vue-router";

const { quizes } = defineProps(["quizes"]);

const router = useRouter();
const NavigateToQuiz = (id) => {
  router.push(`/quiz/${id}`);
};
</script>

<template>
  <div
    v-for="quiz in quizes"
    :key="quiz.id"
    class="card"
    @click="NavigateToQuiz(quiz.id)"
  >
    <img :src="quiz.img" alt="" />
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card .card-text {
  padding: 0 5px;
}

.card .card-text h2 {
  font-weight: bold;
}
</style>
