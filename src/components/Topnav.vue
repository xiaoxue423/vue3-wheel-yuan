<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </router-link>

    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>

    <!-- 手机端的切换按钮 -->
    <svg
      v-if="toggleMenuButtonVisible"
      class="toggleAside"
      @click="toggleAside"
    >
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible_T = inject<Ref<boolean>>("asideVisible"); //get  inject选项来使用这些数据
    console.log("Topnav 获取的 asideVisible 为：" + asideVisible_T.value);

    // 点击改变asideVisible的值
    const toggleAside = () => {
      console.log("点击了按钮");

      asideVisible_T.value = !asideVisible_T.value;
      console.log(asideVisible_T.value);
    };
    return { toggleAside };
  },
};
</script>

<style lang="scss" scoped>
$color: #007974;
.topnav {
  color: $color;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  > .logo {
    max-width: 6em;
    margin-right: auto;

    > svg {
      width: 46px;
      height: 46px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    // border: 1px solid red;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    // background: fade-out(black, 0.9);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    // 使logo居中
    > .logo {
      margin: 0 auto;
      // display: fixed;
    }
    .toggleAside {
      // border: 1px solid red;
      display: inline-block;
    }
  }
}
</style>