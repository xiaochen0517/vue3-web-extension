import {createApp} from "vue";
import {createPinia} from "pinia";
import "@pages/panel/index.css";
import "@assets/styles/tailwind.css";
import Panel from '@pages/panel/Panel';

const pinia = createPinia();
const app = createApp(Panel);

app.use(pinia);
app.mount("#__root");
