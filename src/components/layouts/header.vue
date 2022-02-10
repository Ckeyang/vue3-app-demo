<template>
  <el-header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="home"> 首页 </el-menu-item>
      <el-menu-item index="about">关于</el-menu-item>
    </el-menu>
  </el-header>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const activeIndex = ref("1");
const router = useRouter();
let handleSelect = (key: string, keyPath: string[]) => {
  //   console.log(router);
  router.push(`/${key}`);
  //   console.log(key, keyPath);
};
</script>
<style lang="sass" scoped>
.el-header
  padding: 0
</style>