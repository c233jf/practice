// 统一依赖注入
export type RandomGenerator = () => number

export const makeFastRandomNumber1 =
  (randomGenerator: RandomGenerator) => (max: number) =>
    Math.floor(randomGenerator() * (max + 1))

export const fastRandomNumber = makeFastRandomNumber1(Math.random)

// 自动注入依赖
export interface Dependencies {
  randomGenerator: () => number
}

export const makeFastRandomNumber =
  ({ randomGenerator }: Dependencies) =>
  (max: number) =>
    Math.floor(randomGenerator() * (max + 1))
