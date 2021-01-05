<template>
  <div class="drawing-area">
    <tool-bar></tool-bar>
    <color-picker class="tes"></color-picker>
    <board class="tes"></board>
  </div>
</template>

<script>
import Board from './Board'
import ToolBar from './ToolBar.vue'
import ColorPicker from './tools/ColorPicker.vue'

export default {
  components: {
    Board,
    ColorPicker,
    ToolBar
  }
}
</script>

<style scoped>
  .drawing-area{
    display: flex;
    justify-content: center;
  }

  .tes{
    margin-right: auto;
  }
</style>