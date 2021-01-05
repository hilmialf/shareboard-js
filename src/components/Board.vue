<template>
  <div ref="boardWrapper" class="board-wrapper">
    <canvas
      :height="`${canvasRes.y}px`"
      :width="`${canvasRes.x}px`"
      @mousedown="onMouseDown($event)"
      @mousemove="onMouseMove($event)"
      @mouseup="onMouseUp($event)"
      class="board"
      id="board"
    >
    </canvas>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      canvasRes: {
        // in px
        x: 2560,
        y: 1440
      },
      canvasSize: {
        // in px
        x: 1280,
        y: 720
      },
      ctx: null,
      drawing: false,
      current: {
        x: 0,
        y: 0
      },
      bounds: null
    };
  },
  computed: {
    scale() {
      return {
        x: this.canvasRes.x / this.canvasSize.x,
        y: this.canvasRes.y / this.canvasSize.y
      };
    },
    ...mapState({
      activeColor: state => state.board.activeColor,
      activeTool: state => state.board.activeTool
    })
  },
  methods: {
    onMouseDown(e) {
      this.drawing = true;
      this.current.x = e.offsetX * this.scale.x;
      this.current.y = e.offsetY * this.scale.y;
    },

    onMouseMove(e) {
      let next = {
        x: e.offsetX * this.scale.x,
        y: e.offsetY * this.scale.y
      };
      if (!this.drawing) {
        return;
      }
      this.activeTool.action(this.ctx, {
        cur: this.current,
        next: next,
        color: this.activeColor
      });
      this.current.x = next.x;
      this.current.y = next.y;
    },

    onMouseUp(e) {
      if (!this.drawing) {
        return;
      }
      let next = {
        x: e.offsetX * this.scale.x,
        y: e.offsetY * this.scale.y
      };
      this.drawing = false;
      this.activeTool.action(this.ctx, {
        cur: this.current,
        next: next,
        color: this.activeColor
      });
    }
  },
  mounted() {
    let c = document.getElementById("board");
    this.$refs.boardWrapper.style.width = `${this.canvasSize.x}px`;
    this.$refs.boardWrapper.style.height = `${this.canvasSize.y}px`;
    this.ctx = c.getContext("2d");
    this.bounds = c.getBoundingClientRect();
  }
};
</script>

<style scoped>
.board-wrapper {
  height: 500px;
  width: 800px;
}
.board {
  border-style: solid;
  height: 100%;
  width: 100%;
}
</style>
