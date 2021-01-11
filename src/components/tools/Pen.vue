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
              :style="{ background: color }"
              @click="setPenColor(index)"
            >
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
      name: "pen",
      isMenuOpen: false
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
        this.$store.commit("board/setTool", this.name);
      }
    }
  },
  computed: {
    isActive() {
      return this.$store.state.board.activeTool === this.name;
    },
    colors() {
      return this.$store.state.global.penColors;
    },
    activeColor() {
      return this.$store.state.global.penColors[
        this.$store.state.board.activeColor
      ];
    }
  }
};
</script>

<style scoped>
.active {
  background: #e0e0e0;
}
</style>
