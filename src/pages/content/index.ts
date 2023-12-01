import {createApp} from "vue";
import {createPinia} from "pinia";
import {v4 as uuidv4} from "uuid";
import "@pages/content/index.css";
import "@assets/styles/tailwind.css";
import Content from "@pages/content/Content";

const divId = `extension-${uuidv4()}`;
const div = document.createElement("div");
div.id = divId;
document.body.appendChild(div);

const pinia = createPinia();
const app = createApp(Content);

app.use(pinia);
app.mount(`#${divId}`);

console.log("content script loaded");
