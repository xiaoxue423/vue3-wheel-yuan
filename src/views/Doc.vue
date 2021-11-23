<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />

    <div class="content">
      <!-- 如果这个asideVisible为真 就显示这个侧边栏 -->
      <aside v-if="asideVisible_D">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/started">开始使用</router-link>
          </li>
        </ol>
        <h2 class="componentsList">组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>

      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";

export default {
  components: { Topnav },
  setup() {
    const asideVisible_D = inject<Ref<boolean>>("asideVisible"); //get
    // console.log("Docs aside 获取的 asideVisible 为：" + asideVisible.value);
    return { asideVisible_D };
  },
};
</script>

<style lang="scss" scoped>
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    // 头部导航不占空间
    flex-shrink: 0;
  }
  > .content {
    // 占满整个空间
    flex-grow: 1;
    padding-top: 80px;
    padding-left: 200px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
  }
}

aside {
  @media (max-width:500px) {
     font-size: 16px;  
     width: 150px;
     padding-top: 100px;
  }
  font-size: 20px;
  background: lightblue;
  width: 180px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding-top: 90px;
  z-index: $aside-index;

  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > .componentsList {
    margin-top: 30px;
  }

  > ol {
    > li {
      > a {
        display: block;
        padding: 20px 20px;
      }
      .router-link-active {
        color: white;
        background: #40e0d0;
        text-decoration: none;
      }
    }
  }
}

main {
  overflow: auto;
}
</style>