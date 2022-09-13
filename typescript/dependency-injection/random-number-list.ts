import { randomNumber2, randomNumber3 } from './index'

// randomNumber参数化
export const randomNumberList1 = (max: number, length: number) =>
  Array(length)
    .fill(null)
    .map(() => randomNumber2(Math.random, max))

// 区分构建与使用
export const randomNumberList2 = (max: number, length: number) =>
  Array(length)
    .fill(null)
    .map(() => randomNumber3(max))

// 统一依赖注入
export type RandomNumber = (max: number) => number

export const makeRandomNumberList1 =
  (randomNumber: RandomNumber) => (max: number, length: number) =>
    Array(length)
      .fill(null)
      .map(() => randomNumber(max))

// 自动依赖注入容器, 保证依赖顺序正确
export interface Dependencies {
  randomNumber: (max: number) => number
}

export const makeRandomNumberList =
  ({ randomNumber }: Dependencies) =>
  (max: number, length: number) =>
    Array(length)
      .fill(null)
      .map(() => randomNumber(max))
