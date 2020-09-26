import Mock = jest.Mock;

export default function asMock<T, Y extends any[]>(fn?: (...args: Y) => T): Mock<T, Y> {
  return fn as Mock<T, Y>;
}
