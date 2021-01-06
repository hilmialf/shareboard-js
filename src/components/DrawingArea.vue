<template>
  <div class="drawing-area">
    <tool-bar></tool-bar>
    <board></board>
  </div>
</template>

<script>
import Board from "./Board";
import ToolBar from "./ToolBar.vue";

export default {
  components: {
    Board,
    ToolBar
  }
};
</script>

<style scoped>
.drawing-area {
  display: flex;
  justify-content: center;
}
</style>
