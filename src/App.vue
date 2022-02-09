
<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main> <hello-world msg="hello word" /></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
</script>

<style>
.el-header {
  background-color: red;
}
.el-aside {
  background-color: blue;
}
.el-main {
  background-color: yellowgreen;
}
</style>
