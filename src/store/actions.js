import axiosClient from "../axiosClient";

export default {
  searchMeals({ commit }, keyword) {
    axiosClient
      .get(`/search.php?s=${keyword}`)
      .then(({ data }) => commit("setSearchedMeals", data.meals));
  },
  searchMealsLetter({ commit }, letter) {
    axiosClient
      .get(`/search.php?f=${letter}`)
      .then(({ data }) => commit("setMealsByLetter", data.meals));
  },
  searchMealsByIngredient({ commit }, ing) {
    axiosClient
      .get(`/filter.php?i=${ing}`)
      .then(({ data }) => commit("setMealsByIngredient", data.meals));
  },
  searchRandomMeal({ commit }) {
    axiosClient.get("/random.php").then(({ data }) => {
      if (data.meals.length > 10) {
        commit("setRandomMeal", data.meals.slice(0, 10));
      } else {
        commit("setRandomMeal", data.meals);
      }
    });
  },
};
