<template lang="">
    <div class="wheel-tabs">
        <div class="wheel-tabs-nav" ref="container">
            <div 
            class="wheel-tabs-nav-item" 
             v-for="(t,index) in titles" 
            :ref="el => {if (t === toggled ) selectedItem = el }"
            :class="{selected: t === toggled}"
             :key="index"
             @click="selectTab(t)"
             >{{t}}
             </div>
             <div class="wheel-tabs-nav-indicator" ref="indicator"></div>
        </div>

        <div class="wheel-tabs-content">
            <!-- <component class="wheel-tabs-content-item" :is="current" /> -->
            
            <component :is="current" :key="current.props.title"></component>
            <!-- <component 
            :class="{selected: c.props.title === toggled}"
             class="wheel-tabs-content-item"
              v-for="(c,index) in defaults" 
              :is="c" 
              :key="index"/> -->

            <!-- <component :is="defaults[0]" /> -->
            <!-- <component :is="defaults[1]" /> -->
            <!-- {{defaults[0]}} -->
        </div>
    </div>
</template>
<script lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import Tab from "./Tab.vue";

export default {
  props: {
    toggled: {
      type: String,
    },
  },
  setup(props, context) {
    // console.log({ ...context });
    // console.log({ ...context.slots });
    // console.log({ ...context.slots.default });
    // console.log({ ...context.slots.default() });
    const defaults = context.slots.default();
    // console.log(defaults);
    // console.log(defaults[0].type);
    // console.log(defaults[0].type === Tab); //true
    defaults.forEach((tag) => {
      console.log("tag.type");
      console.log(tag.type);
      //@ts-ignore
      if (tag.type.name !== Tab.name) {
        throw new Error("Tabs 子标签必须是Tab");
      }
    });
    const current = computed(() => {
      //   console.log("重新return ");
      return defaults.filter((tag) => {
        //filter返回值是一个数组
        return tag.props.title === props.toggled;
      })[0];
    });

    const titles = defaults.map((tag) => {
      //titles是一个数组
      // console.log(tag);
      // console.log({
      //     ...tag.props
      // });
      console.log(tag.props.title); //导航1 导航2 导航3
      return tag.props.title;
    });
    // console.log(titles);

    const selectTab = (title: string) => {
      //   console.log("点击了导航");
      context.emit("update:toggled", title);
    };

    const container = ref<HTMLDivElement>(null);
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);

    onMounted(() => {
      console.log("mounted");
      watchEffect(
        () => {
          console.log("watch effect执行了");
          const { width } = selectedItem.value.getBoundingClientRect();
          indicator.value.style.width = width + "px";
          const { left: left1 } = container.value.getBoundingClientRect();
          const { left: left2 } = selectedItem.value.getBoundingClientRect();
          const left = left2 - left1;
          indicator.value.style.left = left + "px";
        },
        { flush: "post" }
      );
    });

    return {
      defaults,
      titles,
      current,
      selectTab,
      indicator,
      container,
      selectedItem,
    };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.wheel-tabs {
  &-nav {
    display: flex;
    color: $color;
    cursor: pointer;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      //   border: 1px solid red;
      padding: 8px 0;
      margin: 0 16px;

      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;

    // &-item {
    //   display: none;
    //   &.selected {
    //     display: block;
    //   }
    // }
  }
}
</style>