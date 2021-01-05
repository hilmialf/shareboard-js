<template>
  <div class="tool">
    <fa-icon
      :icon="['fas', 'pen']"
      class="tool-icon"
      :class="[isActive ? 'active' : 'inactive']"
      @click="setTool(tool)"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      tool: {
        name: "pen",
        action(ctx, { cur, next, color }) {
          ctx.beginPath();
          ctx.moveTo(cur.x, cur.y);
          ctx.lineTo(next.x, next.y);
          ctx.strokeStyle = color.hex;
          ctx.lineWidth = 5;
          ctx.stroke();
          ctx.closePath();
        }
      }
    };
  },
  methods: {
    ...mapMutations({
      setTool: "board/setTool"
    })
  },
  computed: {
    isActive() {
      return this.$store.state.board.activeTool.name === this.tool.name;
    }
  }
};
</script>

<style scoped>
.active {
  background: burlywood;
}

.inactive {
  background: #ffc0c0;
}
.tool-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  vertical-align: middle;
  padding: 10px;
}
</style>
