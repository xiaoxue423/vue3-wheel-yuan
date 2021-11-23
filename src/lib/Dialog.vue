<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="wheel-dialog-overlay" @click="onClickOverlay"></div>
      <div class="wheel-dialog-wrapper">
        <div class="wheel-dialog">
          <header>
            <slot name="title" />
            <span @click="close" class="wheel-dialog-close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button @click="ok" level="main">确定</Button>
            <Button @click="cancel">取消</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script>
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    //是否要做到点击遮罩层关闭
    closeOnclickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const onClickOverlay = () => {
      if (props.closeOnclickOverlay) {
        close();
      }
    };

    const ok = () => {
      // const result = context.emit("ok"); //undefined emit不会给返回值  事件不会有返回值
      //if (props.ok && props.ok() !== false) {
      //     close();
      //   }
      if (props.ok?.() !== false) {
        close();
      }
      console.log("点击确定按钮了");
    };
    const cancel = () => {
      //   context.emit("close");
      //   if (props.cancel && props.cancel() !== false) {
      //     close();
      //   }
      if (props.cancel?.() !== false) {
        close();
      }
      console.log("点击取消按钮了");
    };

    return {
      close,
      onClickOverlay,
      ok,
      cancel,
    };
  },
};
</script>
<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.wheel-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em; //em????
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.8); //0.8比0.5颜色浅
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 26px;
    height: 26px;
    cursor: pointer;
    border: 1px solid grey;
    border-radius: 8px;
    &::before,
    &::after {
      content: "";
      background: black;
      height: 1px;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    //  rotate(45deg)  顺时针旋转
  }
}
</style>