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
      <el-sub-menu index="2-4">
        <template #title>组件API</template>
        <el-menu-item index="tailApi">tailwind css</el-menu-item>
        <el-menu-item index="elementApi">element plus</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="test">测试</el-menu-item>
    </el-menu>
  </el-header>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();
const activeIndex = ref(store.getters.getPath);
let handleSelect = (key: string, keyPath: string[]) => {
  //   console.log(router);
  router.push(`/${key}`);
  store.commit("SETPATH", key);
  //   console.log(key, keyPath);
};
</script>
<style lang="sass" scoped>
.el-header
  padding: 0
</style>