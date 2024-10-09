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
URI = f" ws://localhost:{PORT}"

EXAMPLE_MESSAGE = "Hello javascript"
EXAMPLE_JSON = json.dumps({"hello": "javascript"})


async def listening() -> None:
    pass
