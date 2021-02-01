const board = {
  namespaced: true,
  state: {
    activeColor: "black",
    activeSize: "small",
    activeTool: "pen"
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
