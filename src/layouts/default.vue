
<template>
  <el-affix :offset="0">
    <my-header />
  </el-affix>
  <el-main>
    <router-view></router-view>
  </el-main>
</template>

<script lang="ts" setup>
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  border: 0;
}
</style>
