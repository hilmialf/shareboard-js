<template>
  <div class="color-picker">
    <div v-for="color in colors" :key="color.id" :style="`background:${color.hex}`" class="rectangle"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      colors: [
        {
          name: 'black',
          hex: '#000000',
        },
        {
          name: 'red',
          hex: '#cc0000'
        },
        {
          name: 'blue',
          hex: '#0000ff'
        }
      ]
    }
  }
}
</script>

<style scoped>
.rectangle{
    width:30px;
    height:30px;
}
</style>