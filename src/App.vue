<script setup lang="ts">
import { ref } from "vue";
import { ToastNot } from './components/';
const msg = ref("");
</script>

<template>
  <header>
    <ToastNot :msg="msg" type="error" class="hover:bg-green-700" />
  </header>
  <input type="text" v-model="msg" />
  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
</style>
