import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import "./style.css";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

pinia.use(({ store }) => {
  store.$router = markRaw(router);
});

router.beforeEach((to, from) => {
  if (to.path !== from.path) {
    window.scrollTo(0, 0);
  }
});

app.use(pinia);
app.use(router);
app.mount("#app");
