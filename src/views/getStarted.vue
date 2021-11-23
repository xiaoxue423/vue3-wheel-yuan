<template>
  <article>
    <h1 class="title">开始使用</h1>

    <p>请先<a href="#/doc/install">安装</a>本组件库。</p>
    <p>然后在你的代码中写入下面的代码</p>
    <pre v-if="width > 500"><code>import {Button, Tabs, Switch, Dialog} from "king-ui"</code></pre>
    <pre v-else><code>import {Button, Tabs, Switch, Dialog} 
from "king-ui"</code></pre>
    就可以使用我提供的组件了。


    <h2 class="title title-vue">Vue 单文件组件</h2>
    <p>代码示例：</p>
    <div>
    <pre v-if="width > 500"><code>&lt;template&gt;
  &lt;div&gt;&lt;Button&gt;按钮&lt;/Button&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button, Tabs, Switch, Dialog} from "king-ui"
  export default {
    components: {Button}
  }
&lt;/script&gt;
 </code></pre>
     <pre v-else><code>&lt;template&gt;
  &lt;div&gt;&lt;Button&gt;按钮&lt;/Button&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button, Tabs, Switch, 
Dialog} from "king-ui"
  export default {
    components: {Button}
  }
&lt;/script&gt;
 </code></pre>
    </div>

  </article>
</template>

<script lang="ts">
export default {
  setup() {
    const width = document.documentElement.clientWidth
    return {
      width
    }
    
  }
}
</script>

<style lang="scss">
article {
  font-size: 20px;
  line-height: 40px;
  > div {
      border: 1px solid #d9d9d9;
      padding: 20px 20px;
      width: 60%;
      border-radius: 8px;
  }
}
.title{
    margin-bottom: 10px;
    &.title-vue{
        margin-top:20px;
    }
}   
@media(max-width:500px){
  article {
  font-size: 16px;
  word-wrap:break-word;
   > div {
      border: 1px solid #d9d9d9;
      padding: 20px 20px;
      width: 100%;
      border-radius: 8px;
  }
}
}
</style>