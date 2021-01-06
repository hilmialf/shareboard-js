<template>
  <div class="tool">
    <v-menu v-model="isMenuOpen" offset-x :style="{ 'flex-direction': 'row' }">
      <template v-slot:activator="{ attrs }">
        <v-btn
          :class="[isActive ? 'active' : '']"
          large
          icon
          :color="activeColor"
          @click="setTool"
          v-bind="attrs"
        >
          <v-icon large>mdi-pen</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(color, index) in colors" :key="index">
          <v-list-item-title>
            <v-btn
              icon
              :style="{ background: color.hex }"
              @click="setPenColor(color)"
            >
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
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
      },
      isMenuOpen: false,
      colors: [
        {
          name: "black",
          hex: "#000000"
        },
        {
          name: "red",
          hex: "#cc0000"
        },
        {
          name: "blue",
          hex: "#0000ff"
        }
      ]
    };
  },
  methods: {
    ...mapMutations({
      setPenColor: "board/setPenColor"
    }),
    setTool() {
      if (this.isActive) {
        this.isMenuOpen = !this.isMenuOpen;
      } else {
        this.$store.commit("board/setTool", this.tool);
      }
    }
  },
  computed: {
    isActive() {
      return this.$store.state.board.activeTool.name === this.tool.name;
    },
    ...mapState({ activeColor: state => state.board.activeColor.hex })
  }
};
</script>

<style scoped>
.active {
  background: #e0e0e0;
}
</style>
