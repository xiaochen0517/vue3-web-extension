import logo from "@assets/img/logo.svg";
import "@pages/newtab/Newtab.css";
import {defineComponent} from "vue";

export default defineComponent({
  name: "NewTabComponent",
  setup() {
    return () => (
      <div class="App">
        <header class="App-header">
          <img src={logo} class="App-logo" alt="logo"/>
          <p>
            Edit <code>src/pages/newtab/Newtab.tsx</code> and save to reload.
          </p>
          <a
            class="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React!
          </a>
        </header>
      </div>
    );
  }
});
