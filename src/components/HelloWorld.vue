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
          <p>构建工具：vite</p>
          <p>UI 框架: element-plus</p>
          <p>预编译css: sass</p>
          <p>基础css库: tailwindcss</p>
          <p>ajax库: axios</p>
          <p>路由管理: vue-router</p>
        </article>
      </article>
    </article>
  </section>
</template>

<style lang='scss' scoped>
</style>
