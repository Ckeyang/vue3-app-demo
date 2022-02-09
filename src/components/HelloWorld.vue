<script setup lang='ts'>
import { reactive } from "vue";
import loginApi from "~/service/api/login";
interface person {
  name: string;
  age: number;
}
let user: person = {
  name: "ckey",
  age: 28,
};
defineProps({
  msg: String,
});
const state = reactive({ user });
// let count = ref(0);
let addCount = () => {
  state.user.age++;
  loginApi.login({ test: "test" }).then();
};
</script>

<template>
  <h1 class="colorred">{{ msg }}</h1>
  <!-- <section>{{ state.user.name }}{{ state.user.age }}</section> -->
  <el-button type="primary" @click="addCount">{{ state.user.age }}</el-button>
  <!-- <button @click="addCount">test:{{ state.user.age }}</button> -->
</template>

<style lang='scss' scoped>
$colorRed: red;
.colorred {
  color: $colorRed;
}
</style>
