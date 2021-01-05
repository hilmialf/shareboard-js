<template>
<div ref="boardWrapper" class="board-wrapper">
  <canvas :height="`${canvasRes.y}px`" :width="`${canvasRes.x}px`" @mousedown="onMouseDown($event)" @mousemove="onMouseMove($event)" @mouseup="onMouseUp($event)" class="board" id="board">

  </canvas>
</div>
</template>

<script>

export default {
  data(){
    return {
      canvasRes: { // in px
        x: 1920,
        y: 1080
      },
      canvasSize: { // in px
        x: 800,
        y: 500,
      },
      ctx: null,
      drawing: false,
      current: {
        x: 0,
        y: 0
      },
      bounds: null,
    }
  },
  computed:{
    scale(){
      return {
        x: this.canvasRes.x/this.canvasSize.x,
        y: this.canvasRes.y/this.canvasSize.y
      }
    }
  },
  methods: {
    draw(x0, y0, x1, y1){
      console.log({x0,y0,x1,y1})
      this.ctx.beginPath();
      this.ctx.moveTo(x0*this.scale.x, y0*this.scale.y);
      this.ctx.lineTo(x1*this.scale.x, y1*this.scale.y);
      this.ctx.strokeStyle = "red";
      this.ctx.lineWidth = 5;
      this.ctx.stroke();
      this.ctx.closePath();
    },
    onMouseDown(e){
      console.log(e)
      this.drawing = true;
      this.current.x = e.offsetX;
      this.current.y = e.offsetY;
    },

    onMouseMove(e){
      if (!this.drawing) { return; }
      this.draw(this.current.x, this.current.y, e.offsetX, e.offsetY);
      this.current.x = e.offsetX;
      this.current.y = e.offsetY;
    },

    onMouseUp(e){
      if (!this.drawing) { return; }
      this.drawing = false;
      this.draw(this.current.x, this.current.y, e.offsetX, e.offsetY);
    },
  },
  mounted(){
    let c = document.getElementById("board");
    this.$refs.boardWrapper.style.width = `${this.canvasSize.x}px`;
    this.$refs.boardWrapper.style.height = `${this.canvasSize.y}px`;
    this.ctx = c.getContext("2d");
    this.bounds = c.getBoundingClientRect()
  }
}
</script>

<style scoped>
.board-wrapper{
  height: 500px;
  width: 800px;
}
.board{
  border-style: solid;
  height: 100%;
  width: 100%;
}
</style>