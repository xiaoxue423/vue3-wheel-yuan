<template>
  <router-view />
</template>

<script lang="ts" setup>
import { ref, provide } from "vue";
import { router } from "./router";

// 获取页面宽度
const width = document.documentElement.clientWidth;
// console.log(width);

const asideVisible_A = ref(width <= 500 ? false : true);
provide("asideVisible", asideVisible_A); //set  provide选项来提供数据

//路由切换所做的事情  切换路由的时候  关掉组件列表
router.afterEach(() => {
  if (width <= 500) {
    asideVisible_A.value = false;
  }
});
</script>

<style lang="scss">
// .icon {
//   width: 1em;
//   height: 1em;
//   vertical-align: -0.15em;
//   fill: currentColor;
//   overflow: hidden;
// }
</style>
