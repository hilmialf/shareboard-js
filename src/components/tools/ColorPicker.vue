<template>
  <div class="color-picker">
    <div v-for="color in renderColors" :key="color.id" :style="`background:${color.hex}`" @click="setPenColor(color)" class="rectangle">
      <fa-icon v-if="color.isActive" :icon="['fas','check']"/>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

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
        },
      ]
    }
  },
  computed: {
    renderColors(){
      return this.colors.map((cur)=>({...cur, isActive: cur.name === this.activeColor.name}))
    },
    ...mapState({
      activeColor: state => state.board.activeColor
    })
  },
  methods:{
    ...mapMutations({
      setPenColor: 'board/setPenColor'
    })
  }
}
</script>

<style scoped>
.color-picker{
  align-self: center;
  width: 100px;
}
.rectangle{
    display: flex;
    align-items: center;
    justify-content: center;
    width:30px;
    height:30px;
}
</style>