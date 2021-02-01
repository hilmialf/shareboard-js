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
        <v-list-item v-for="(size, index) in sizes" :key="index">
          <v-list-item-title>
            <v-btn @click="setEraserSize(index)" icon large class="my-2">
              <div
                :class="[index === activeSize ? 'active-size' : '']"
                :style="{
                  width: `${size}px`,
                  height: `${size}px`,
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
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      name: "eraser",
      isMenuOpen: false
    };
  },
  methods: {
    setTool() {
      if (this.isActive) {
        this.isMenuOpen = !this.isMenuOpen;
      } else {
        this.$store.commit("board/setTool", this.name);
      }
    },
    ...mapMutations({ setEraserSize: "board/setEraserSize" })
  },
  computed: {
    isActive() {
      return this.$store.state.board.activeTool === this.name;
    },
    ...mapState({
      sizes: state => state.global.eraserSizes,
      activeSize: state => state.board.activeSize
    })
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
