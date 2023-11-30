import {createApp} from "vue";
import {createPinia} from "pinia";
import "@pages/options/index.css";
import "@assets/styles/tailwind.css";
import Options from "@pages/options/Options";

const pinia = createPinia();
const app = createApp(Options);

app.use(pinia);
app.mount("#__root");
