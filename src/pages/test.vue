<template>
  <section>
    <span>实验了 directore:</span>
    <el-input v-focus v-model="value" placeholder="" class="mt-4"></el-input>
    <section class="mt-4">
      <span>实验了 vuex :</span>
      {{ store.state.path }}
    </section>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "vuex";
let store = useStore();
const value = ref("");
</script>