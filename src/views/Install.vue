<template>
<article>
  <h1 class="title">安装</h1>
  <p>打开终端运行下列命令：</p>
  <pre><code>npm install king-ui</code></pre>
  <p>或</p>
  <pre><code>yarn add king-ui</code></pre>

  <p class="right-link">
    <router-link to="/doc/started">下一节：开始使用</router-link>
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
    text-align: center;
    margin-right:20px;
    color:$color;
}
</style>