import "@pages/content/Content.css";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContentComponent",
  setup() {
    console.log("ContentComponent");

    return () => (
      <div>
        <h1>Content</h1>
        <p>Test</p>
      </div>
    );
  }
});
