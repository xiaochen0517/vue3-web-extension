import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import {resolve} from "path";
import {defineConfig} from "vite";
import {crx, ManifestV3Export} from "@crxjs/vite-plugin";
import {stripDevIcons} from "./plugins/StripDevIcons";

import manifest from "./manifest.json";
import devManifest from "./manifest.dev.json";
import pkg from "./package.json";

const root = resolve(__dirname, "src");
const pagesDir = resolve(root, "pages");
const assetsDir = resolve(root, "assets");
const outDir = resolve(__dirname, "dist");
const publicDir = resolve(__dirname, "public");

const isDev = process.env.__DEV__ === "true";

const extensionManifest = {
  ...manifest,
  ...(isDev ? devManifest : {} as ManifestV3Export),
  name: isDev ? `DEV: ${pkg.name}` : pkg.name,
  version: pkg.version,
};

export default defineConfig({
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
      "@pages": pagesDir,
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    crx({
      manifest: extensionManifest as ManifestV3Export,
      contentScripts: {
        injectCss: true,
      }
    }),
    stripDevIcons(isDev),
  ],
  publicDir,
  build: {
    outDir,
    sourcemap: isDev,
    emptyOutDir: !isDev,
    rollupOptions: {
      input: {
        panel: resolve(pagesDir, "panel/index.html"),
      }
    }
  },
});
