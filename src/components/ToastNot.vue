<script setup lang="ts">
import { computed, watch, ref } from "vue";

const props = defineProps<{
  msg: string | null | "" | undefined;
  type: "success" | "error" | "warning" | "message" | null | "" | undefined;
}>();

const color = computed(() => {
  switch (props.type) {
    case "success":
      return "green";

    case "warning":
      return "green";

    case "error":
      return "red";

    default:
      return "";
    // code block
  }
});

const innerMsg = ref<null | string | undefined>(null);

watch(
  () => props.msg,
  (newVal, oldVal) => {
    console.log("change", newVal, oldVal);
    if (newVal) {
      innerMsg.value = props.msg;
      setTimeout(() => {
        innerMsg.value = null;
      }, 5000);
    }
  }
);

const textColor = computed(() => {
  switch (!!props.type) {
    case false:
      return "black";

    default:
      return "white";
    // code block
  }
});

</script>

<template>
  <div class="toast-notif" :class="[{ show: !!innerMsg }]">
    {{ innerMsg }}
  </div>
</template>

<style scoped>
.toast-notif {
  position: fixed;
  top: -200px;
  right: 50px;
  border-radius: 4px;
  padding: 10px;
  width: 300px;
  transition: all 0.3s ease-in-out;
  background-color: v-bind("color");
  color: v-bind("textColor");
}

.show {
  top: 20px;
}
</style>
