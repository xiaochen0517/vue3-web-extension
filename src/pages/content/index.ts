import { createApp } from "vue";
import { createPinia } from "pinia";
import "@pages/content/index.css";
import "@assets/styles/tailwind.css";
import Content from "@pages/content/Content";

const div = document.createElement("div");
div.id = "VueWebExtensionApp";
document.body.appendChild(div);

const pinia = createPinia();
const app = createApp(Content);

app.use(pinia);
app.mount("#VueWebExtensionApp");

console.log("content script loaded");
