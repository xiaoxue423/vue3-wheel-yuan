<template lang="">
    <article class="markdown-body" v-html="content"></article>
</template>
<script lang="ts">
// md其实是一段字符串，所以用v-html
// import md from '../markdown/intro.md'
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  // setup(props) {
  //   const content = ref<string>(null);
  //   import(props.path).then((result) => {
  //     console.log(result);
  //     content.value = result.default;
  //   });
  //   return {
  //     content,
  //   };
  // },
};
</script>
<style lang="scss">
.next {
  text-align: right;
  margin-right: 20px;
}
</style>