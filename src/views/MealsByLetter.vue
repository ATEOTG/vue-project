<template>
  <div>
    <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">
        Search Meals By Letter
      </h1>
    </div>
    <div class="flex justify-center gap-3 px-8 mb-6">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        class="w-2 h2 flex items-center justify-center hover:text-orange-400 hover:scale-105"
      >
        {{ letter }}
      </router-link>
    </div>
    <div>
      <Meals :meals="meals" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const meals = computed(() => store.state.mealsByLetter);
const letters = "ABCDEFGHIKLMNOPQRSTUVWXYZ".split("");

watch(route, () => {
  if (route.params.letter) {
    store.dispatch("searchMealsLetter", route.params.letter);
  } else {
    store.commit("setMealsByLetter", []);
  }
});

onMounted(() => {
  if (route.params.letter) {
    store.dispatch("searchMealsLetter", route.params.letter);
  } else {
    store.commit("setMealsByLetter", []);
  }
});
</script>

<style scoped></style>
