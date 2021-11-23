<template>
  <div>
    <button
      class="wheel-switch"
      @click="toggle"
      :class="{ 'wheel-checked': value }"
    >
      <span></span>
    </button>
    <div>{{ openorclose }} : {{ value }}</div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    // const x = ref(false); //ref是一个盒子
    // const toggle = ()=>{
    //   x.value = !x.value
    // }
    // return {
    //   x,toggle
    // }
    const openorclose = computed(() => (props.value === true ? "开" : "关"));
    const toggle = () => {
      context.emit("update:value", !props.value); //emit的第一个参数是事件名，第二个参数是事件的参数
      //this.$emit()
    };
    return { toggle, openorclose };
  },
};
</script>

<style lang="scss">
$h: 30px;
$h2: $h - 4px;
.wheel-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;

    // 添加过度动画
    transition: left 250ms;
  }
  &.wheel-checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  // button:hover > span {
  //   left: calc(100% - #{$h2} - 2px);
  // }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.wheel-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>