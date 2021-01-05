<template>
  <div class="toolbar">
    <pen></pen>
    <eraser></eraser>
  </div>
</template>

<script>
import Eraser from "./tools/Eraser.vue";
import Pen from "./tools/Pen.vue";

export default {
  components: { Pen, Eraser }
};
</script>

<style>
.toolbar {
  align-self: center;
  border-radius: 40px;
  background-color: beige;
  height: 150px;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.toolbar .tool {
  padding: 10px;
}
</style>
