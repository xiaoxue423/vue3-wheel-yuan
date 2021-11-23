<template>
 <button class="wheel-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="wheel-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";

export default {
  props: {
    theme: {
      type: String,
      default: "button", //text link
    },
    size: {
      type: String,
      default: "normal", //small big
    },
    level: {
      type: String,
      default: "normal", //main danger
    },
    disabled: {
      type: Boolean,
      default: false, //true 和 false
    },
    loading: {
      type: Boolean,
      default: false, //true false
    },
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`wheel-theme-${theme}`]: theme,
        [`wheel-size-${size}`]: size,
        [`wheel-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.wheel-button {
  box-sizing: border-box;
  height: $h;
  // margin: 10px 10px;
  padding: 0 12px; //宽度用padding撑开
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap; //百度????
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95); //对黑色进行淡化   百度?????
  transition: background 250ms; //百度？？？？
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none; //火狐浏览器不怎么支持，所以写下面一句话
  }
  &::-moz-focus-inner {
    border: 0; //百度？？？？
  }
  // 链接按钮样式
  &.wheel-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  // 文字按钮样式
  &.wheel-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit; //百度
    &:hover,
    &:focus {
      color: darken(white, 5%);
    }
  }
  //大按钮的样式
  &.wheel-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 30px;
  }
  // 小按钮的样式
  &.wheel-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.wheel-theme-button {
    &.wheel-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        border-color: darken($blue, 10%);
        background: darken($blue, 10%);
      }
    }
    &.wheel-level-danger {
      background: $red;
      color: white;
      border-color: $red;
      &:hover,
      &:focus {
        border-color: darken($red, 10%);
        background: darken($red, 10%);
      }
    }
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      // background: #bebebe;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.wheel-theme-link {
    &.wheel-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
    &[disabled] {
      cursor: not-allowed; //不准点击
      color: $grey;
      // &:hover {
      //   border-color: $grey;
      // }
    }
  }

  &.wheel-theme-text {
    &.wheel-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.wheel-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.wheel-theme-link,
  &.wheel-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .wheel-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    // border-style: dashed;
    border-width: 2px;
    animation: wheel-spin 1s infinite linear;
  }
}

// 做360的旋转
@keyframes wheel-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>