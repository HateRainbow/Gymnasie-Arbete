import tensorflow as tf
import keras
from dataclasses import dataclass


model = keras.Sequential(
    [
        keras.layers.LSTM(10, 1),
        keras.layers.Dense(1)
    ]
)


def main() -> None:
    pass


if __name__ == "__main__":
    main()
