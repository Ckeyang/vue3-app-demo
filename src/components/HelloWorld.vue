<script setup lang='ts'>
import { reactive } from "vue";
import loginApi from "~/service/api/login";
interface person {
  name: string;
  age: number;
}
let user: person = {
  name: "test",
  age: 28,
};
defineProps({
  msg: String,
});
const state = reactive({ user });
// let count = ref(0);
let doLogin = () => {
  loginApi.login({ test: "test" }).then();
};
</script>

<template>
  <section class="flex justify-center">
    <article class="tracking-wide leading-loose text-left">
      <h1>Hello,World!</h1>
      <article class="mt-8">
        <h3>demo简介</h3>
        <article class="mt-4">
          <p>
            构建工具：
            <a class="text-blue-400" href="https://vitejs.cn/">vite</a>
          </p>
          <p>
            UI 框架:
            <a
              class="text-blue-400"
              href="https://element-plus.gitee.io/zh-CN/"
            >
              element-plus
            </a>
          </p>
          <p>
            预编译css:
            <a class="text-blue-400" href="https://www.sass.hk/">sass</a>
          </p>
          <p>
            基础css库:
            <a class="text-blue-400" href="https://www.tailwindcss.cn/">
              tailwindcss
            </a>
          </p>
          <p>ajax库: axios</p>
          <p>路由管理: vue-router</p>
        </article>
      </article>
    </article>
  </section>
</template>

<style lang='scss' scoped>
</style>
