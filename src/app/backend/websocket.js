const { WebSocketServer } = require("ws");
const { searchBarStockData } = require("./api_handler");

const PORT = 8080;
const exampleData = {
  hello: "world",
};

const wss = new WebSocketServer({
  port: PORT,
});

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: data", JSON.parse(data));
  });

  ws.send(JSON.stringify(exampleData));
});
