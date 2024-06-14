import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import store from "./store";

const app = createApp(App).use(router).use(store).mount("#app");
