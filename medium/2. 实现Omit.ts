/*
  3 - 实现 Omit
  -------
  by Anthony Fu (@antfu) #中等 #union #built-in
  
  ### 题目
  
  不使用 `Omit` 实现 TypeScript 的 `Omit<T, K>` 泛型。
  
  `Omit` 会创建一个省略 `K` 中字段的 `T` 对象。
  
  例如：
  
  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type TodoPreview = MyOmit<Todo, 'description' | 'title'>
  
  const todo: TodoPreview = {
    completed: false,
  }
  ```
  
  > 在 Github 上查看：https://tsch.js.org/3/zh-CN
*/


/* _____________ 你的代码 _____________ */

type MyOmit<T, K> = {
    [P in keyof T as P extends K ? never : P] : T[P]
}

type test_omit1 = MyOmit<Todo, 'description'>
type test_omit2 = MyOmit<Todo, 'description' | 'completed'>
/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '../utils/index'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}



/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/3/answer/zh-CN
  > 查看解答：https://tsch.js.org/3/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

