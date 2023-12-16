import logo from "@assets/img/logo.svg";
import "@pages/newtab/Newtab.css";
import {defineComponent} from "vue";

export default defineComponent({
  name: "NewTabComponent",
  setup() {
    return () => (
      <div class="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800">
        <header class="flex flex-col items-center justify-center text-white">
          <img src={logo} class="h-96 pointer-events-none animate-pulse" alt="logo"/>
          <p class="text-3xl">
            Edit <code>src/pages/newtab/Newtab.tsx</code> and save to reload.
          </p>
          <a class="text-blue-400 text-3xl" href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
            Learn Vue!
          </a>
          <p class="text-3xl">Newtab styled with TailwindCSS!</p>
        </header>
      </div>
    );
  }
});
