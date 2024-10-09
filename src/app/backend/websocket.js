const { WebSocketServer } = require("ws");

const PORT = 8080;
const exampleJSON = {
  hello: "Python",
};

const message = "Hello python";

const wss = new WebSocketServer({ port: PORT });

wss.on("connection", (ws) => {
  ws.on("error", (err) => {
    console.error(err);
  });

  ws.on("message", () => {});
});

wss.on("listening", () => {
  console.log(`WebSocket server is running on ws://localhost:${PORT}`);
});
