import { createApp } from "vue";
// import { createPinia } from 'pinia'
import App from "./App.vue";
// import plugin from "@/install";
import '@/assets/index.css'
const app = createApp(App);

// app.use(createPinia())
// app.use(plugin);
app.mount("#app");
