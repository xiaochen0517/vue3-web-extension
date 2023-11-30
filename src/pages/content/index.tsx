import {createApp} from "vue";
import {createPinia} from "pinia";
import '@pages/content/index.css'
import "@assets/styles/tailwind.css";
import Content from '@pages/content/Content';

const div = document.createElement('div');
div.id = '__root';
document.body.appendChild(div);

const pinia = createPinia();
const app = createApp(Content);

app.use(pinia);
app.mount("#__root");

try {
  console.log('content script loaded');
} catch (e) {
  console.error(e);
}
