import logo from "@assets/img/logo.svg";
import {defineComponent} from "vue";

export default defineComponent({
  name: "PopupComponent",
  setup() {
    return () => (
      <div class="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800">
        <header class="flex flex-col items-center justify-center text-white">
          <img src={logo} class="h-36 pointer-events-none animate-spin-slow" alt="logo"/>
          <p>
            Edit <code>src/pages/popup/Popup.jsx</code> and save to reload.
          </p>
          <a
            class="text-blue-400"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React!
          </a>
          <p>Popup styled with TailwindCSS!</p>
        </header>
      </div>
    );
  }
});
