<template>
  <div>
    <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">
        Search Meals by Name
      </h1>
    </div>
    <div class="px-8 pb-3">
      <input
        type="text"
        class="rounded-border-2 border-red-200 w-fill"
        placeholder="Search by Name"
        v-model="keyword"
        @change="searchMeals"
      />
    </div>

    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store/index.js";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const meals = computed(() => store.state.searchedMeals);
const keyword = ref("");
const route = useRoute();

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style scoped></style>
