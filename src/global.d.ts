declare module "*.json" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  import Vue, { VNode } from 'vue';

  const content: Vue & {
    // 添加 class 属性
    class?: string;
  };
  export default content;
}
