<template>
  <div class="tool">
    <fa-icon
      :icon="['fas', 'eraser']"
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
        name: "eraser",
        action(ctx, { cur }) {
          ctx.clearRect(cur.x, cur.y, 20, 20);
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
