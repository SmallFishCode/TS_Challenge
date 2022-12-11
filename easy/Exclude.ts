/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #简单 #built-in #union
  
  ### 题目
  
  > 欢迎 PR 改进翻译质量。
  
  实现内置的Exclude <T, U>类型，但不能直接使用它本身。
  
  > 从联合类型T中排除U的类型成员，来构造一个新的类型。
  
  例如：
  
  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```
  
  > 在 Github 上查看：https://tsch.js.org/43/zh-CN
*/


/* _____________ 你的代码 _____________ */

type MyExclude<T, U> = T extends U ? never : T

type test_exclude1 = MyExclude<'a' | 'b' | 'c', 'a'>
type test_exclude2 = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>
type test_exclude3 = MyExclude<string | number | (() => void), Function>


type test_exclude4 = 'a' extends 'a' ? never : 'a'
type test_exclude5 = 'b' extends 'a' ? never : 'b'
type test_exclude6 = 'c' extends 'a' ? never : 'c'
/**
 * extends 的机制，遇到泛型则会使用 分配律
 */
/* _____________ 测试用例 _____________ */
// import type { Equal, Expect } from '@type-challenges/utils'

// type cases = [
//   Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
//   Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
//   Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
// ]



/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/43/answer/zh-CN
  > 查看解答：https://tsch.js.org/43/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

