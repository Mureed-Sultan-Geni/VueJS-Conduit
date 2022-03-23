import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import router from "./Router/index";

createApp(App).use(router).mount("#app");
