import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { createPinia } from "pinia";
import piniaPlugins from "pinia-plugin-persist";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();
createApp(App).use(createPinia()).use(router).use(vuetify).mount("#app");
