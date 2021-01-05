<template>
  <div id="app">
    <div class="container">
    <color-picker></color-picker>
    <board></board>

    </div>
  </div>
</template>

<script>
import Board from './components/Board'
import ColorPicker from './components/ColorPicker.vue'

export default {
  name: 'App',
  components: {
    Board,
    ColorPicker
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container{
  display: flex;
  justify-content: center;
}
</style>
