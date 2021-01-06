const board = {
  namespaced: true,
  state: {
    activeColor: {
      name: "black",
      hex: "#000000"
    },
    activeSize: {
      name: "small",
      diameter: 20
    },
    activeTool: {
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
  },
  actions: {},
  mutations: {
    setPenColor(state, payload) {
      state.activeColor = payload;
    },
    setEraserSize(state, payload) {
      state.activeSize = payload;
    },
    setTool(state, payload) {
      state.activeTool = payload;
    }
  }
};

export default board;
