import {createApp} from "vue";
import {createPinia} from "pinia";
import "@pages/popup/index.css";
import "@assets/styles/tailwind.css";
import Popup from "@pages/popup/Popup";

const pinia = createPinia();
const app = createApp(Popup);

app.use(pinia);
app.mount("#__root");
