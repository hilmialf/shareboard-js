<template>
  <div class="tool">
    <v-menu v-model="isMenuOpen" offset-x :style="{ 'flex-direction': 'row' }">
      <template v-slot:activator="{ attrs }">
        <v-btn
          :class="[isActive ? 'active' : '']"
          large
          icon
          color="black"
          @click="setTool"
          v-bind="attrs"
        >
          <v-icon large>mdi-eraser</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(size, index) in renderedSizes" :key="index">
          <v-list-item-title>
            <v-btn @click="setEraserSize(size)" icon large class="my-2">
              <div
                :class="[size.isActive ? 'active-size' : '']"
                :style="{
                  background: lightblue,
                  width: `${size.diameter}px`,
                  height: `${size.diameter}px`,
                  background: `lightblue`,
                  'border-radius': `50%`
                }"
              ></div>
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      tool: {
        name: "eraser",
        action(ctx, { cur, size }) {
          let clearSize = size.diameter * 2;
          ctx.clearRect(cur.x, cur.y, clearSize, clearSize);
        }
      },
      isMenuOpen: false,
      sizes: [
        {
          name: "small",
          diameter: 20
        },
        {
          name: "medium",
          diameter: 30
        },
        {
          name: "large",
          diameter: 40
        }
      ]
    };
  },
  methods: {
    setTool() {
      if (this.isActive) {
        this.isMenuOpen = !this.isMenuOpen;
      } else {
        this.$store.commit("board/setTool", this.tool);
      }
    },
    ...mapMutations({ setEraserSize: "board/setEraserSize" })
  },
  computed: {
    isActive() {
      return this.$store.state.board.activeTool.name === this.tool.name;
    },
    renderedSizes() {
      return this.sizes.map(size => ({
        ...size,
        isActive: this.$store.state.board.activeSize.name === size.name
      }));
    }
  }
};
</script>

<style scoped>
.active {
  background: #e0e0e0;
}

.active-size {
  border-style: solid;
  border-width: 3px;
}
</style>
