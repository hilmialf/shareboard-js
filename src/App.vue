<template>
  <div id="app">
    <drawing-area></drawing-area>
  </div>
</template>

<script>
import DrawingArea from "./components/DrawingArea.vue";

export default {
  components: { DrawingArea },
  name: "App"
};
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
</style>
