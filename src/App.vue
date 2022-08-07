<script setup lang="ts">
import { ref } from "vue";
import { ToastNot } from './components/';
const msg = ref("");
</script>

<template>
  <header>
    xcvxcv
    <ToastNot :msg="msg" type="error"  />
  </header>
  <input type="text" v-model="msg" />
  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
</style>
