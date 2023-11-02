<script setup>
import Questions from "../components/Questions.vue";
import QuizHeader from "../components/QuizHeader.vue";
import Results from "../components/Result.vue";
import { useRoute } from "vue-router";
import { computed, ref, watch } from "vue";
import quizes from "../assets/data/quizes.json";

const route = useRoute();
const quizId = parseInt(route.params.id);

const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);

const quiz = quizes.find((q) => q.id === quizId);
// const questionStatus = ref(
//   `${currentQuestionIndex.value + 1}/${quiz.questions.length}`
// );

// watch(
//   () => currentQuestionIndex.value,
//   () => {
//     questionStatus.value = `${currentQuestionIndex.value + 1}/${
//       quiz.questions.length
//     }`;
//   }
// );

const questionStatus = computed(
  () => `${currentQuestionIndex.value}/${quiz.questions.length}`
);

const barPercentage = computed(
  () => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
);

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }

  if (quiz.questions.length - 1 === currentQuestionIndex.value) {
    showResults.value = true;
  }

  currentQuestionIndex.value++;
};
</script>

<template>
  <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
  <div>
    <Questions
      v-if="!showResults"
      :question="quiz.questions[currentQuestionIndex]"
      @selecteoption="onOptionSelected"
    />
    <Results
      v-else
      :quizQuestionLength="quiz.questions.length"
      :numberOfCorrectAnswers="numberOfCorrectAnswers"
    />
  </div>
</template>
