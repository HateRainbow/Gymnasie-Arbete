import socket
import asyncio
from json import loads, dumps


PORT = 8080


class SocketConnection:
    def __init__(self) -> None:
        self.client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    async def connect_socket(self) -> SocketConnection:
        try:
            await self.client_socket.connect(('localhost', PORT))
            print(f'Server connected to http://localhost:{PORT}')
        except Exception as e:
            print(f'Error: {e}')

    def client_send(self, result: dict[str, int]) -> None:
        self.client_socket.sendall(result)

    async def client_recieve(self) -> dict[str, int]:
        data: dict[str, int] = await loads(self.client_socket.recv(1204))
        return data


class DataHandling(SocketConnection):
    def __init__(self) -> None:
        self.data: dict = self.client_recieve()

    def __str__(self) -> str:
        return f'Data recieved {self.data}'

    def prediction_result(self) -> dict[str, float]:
        return dumps(expample_of_result)


async def main() -> None:
    socket_handler = SocketConnection()
    expample_of_result: dict = {
        "hello": "world"
    }

    # with asyncio.set_event_loop(socket_handler.connect_socket):
    #     await asyncio.get_running_loop().create_future()

    socket_handler.client_send(expample_of_result)

if __name__ == "__main__":
    main()
