/*
  3060 - Unshift
  -------
  by jiangshan (@jiangshanmeta) #简单 #array
  
  ### 题目
  
  实现类型版本的 ```Array.unshift```。
  
  例如：
  
  ```typescript
  type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
  ```
  
  > 在 Github 上查看：https://tsch.js.org/3060/zh-CN
*/


/* _____________ 你的代码 _____________ */

type Unshift<T extends unknown[], U> = [U, ...T]

type test_unshift = Unshift<[], 1>
type test_unshift2 = Unshift<[1, 2], 0>
type test_unshift3 = Unshift<['1', 2, '3'], boolean>
/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '../utils/index'

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]



/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/3060/answer/zh-CN
  > 查看解答：https://tsch.js.org/3060/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

