import "@pages/content/Content.css";
import {defineComponent} from "vue";

export default defineComponent({
  name: "ContentComponent",
  setup() {
    return () => (
      <div>
        <h1>Content</h1>
      </div>
    );
  }
});
