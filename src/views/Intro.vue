<template>
  <article class="title">
    <h1>介绍</h1>
    <p>Xue UI 是一款基于 Vue 3 和 TypeScript 的 UI 组件库。</p>
    <p>
      这款组件库其实是我为了学习并理解Vue3而写的。全程亲手编写，尽量不采用第三方库，包括你现在看到的这个官网（Vue3实现）也都是我自己写的（支持响应式）。
    </p>
    <p>
      所以强烈不建议你将此 UI
      库用于生产环境。但如果你是抱着看源代码的目的来的，那么这个库还是值得一看的。
    </p>
    <p>
      源代码放在了
      <a href=""></a>，历史提交信息非常规范，你可以按提交的顺序逐个查看；你也可以直接查看每个组件的源代码和示例。
    </p>
    <p>运行方法见 README.md。</p>
    <p class="right-link">
        <router-link to="/doc/install">下一节：安装</router-link>
    </p>
  </article>
</template>

<style lang="scss">
$color: #007974;
article {
  font-size: 20px;
  line-height: 40px;
}
.title{
    margin-bottom: 10px;
}
.right-link{
    text-align: right;
    margin-right:20px;
    color:$color;
}
</style>