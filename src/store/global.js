const global = {
  namespaced: true,
  state: {
    tools: {
      pen: {
        action(ctx, { cur, next, color }) {
          ctx.beginPath();
          ctx.moveTo(cur.x, cur.y);
          ctx.lineTo(next.x, next.y);
          ctx.strokeStyle = color;
          ctx.lineWidth = 5;
          ctx.stroke();
          ctx.closePath();
        }
      },
      eraser: {
        action(ctx, { cur, size }) {
          let clearSize = size * 2;
          ctx.clearRect(cur.x, cur.y, clearSize, clearSize);
        }
      }
    },
    eraserSizes: {
      small: 20,
      medium: 30,
      large: 40
    },
    penColors: {
      black: "#000000",
      red: "#cc0000",
      blue: "#0000ff"
    }
  },
  actions: {},
  mutations: {}
};

export default global;
