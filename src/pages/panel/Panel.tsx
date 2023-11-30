import "@pages/panel/Panel.css";
import {defineComponent} from "vue";

export default defineComponent({
  name: "PanelComponent",
  setup() {
    return () => (
      <div class="container">
        <h1>Dev Tools Panel</h1>
      </div>
    );
  }
});
