/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import fs from "fs";
import {resolve} from "path";

export function stripDevIcons(apply: boolean) {
  if (apply) return null;

  return {
    name: "strip-dev-icons",
    resolveId(source: string) {
      return source === "virtual-module" ? source : null;
    },
    renderStart(outputOptions: any, inputOptions: any) {
      const outDir = outputOptions.dir;
      if (!outDir) return;
      fs.rm(resolve(outDir, "dev-icon-32.png"), () => console.log("Deleted dev-icon-32.png frm prod build"));
      fs.rm(resolve(outDir, "dev-icon-128.png"), () => console.log("Deleted dev-icon-128.png frm prod build"));
    }
  };
}
