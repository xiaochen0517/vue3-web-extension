import {createApp} from "vue";
import {createPinia} from "pinia";
import "@pages/newtab/index.css";
import "@assets/styles/tailwind.css";
import Newtab from '@pages/newtab/Newtab';

const pinia = createPinia();
const app = createApp(Newtab);

app.use(pinia);
app.mount("#__root");
