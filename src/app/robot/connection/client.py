import json
import websockets
from websockets.asyncio.client import connect
import asyncio

from websockets import ClientProtocol
from websockets.client import ClientConnection
from websockets.protocol import Protocol
from websockets.typing import Data, StatusLike
from websockets import WebSocketServer


PORT = 8080


async def client(prediction: Data, uri: ClientConnection = f" ws://localhost:{PORT}") -> ClientProtocol:

    async with connect(uri) as websocket:
        await websocket.send(prediction)

        await websocket.recv()


if __name__ == "__main__":
    asyncio.run(client)
