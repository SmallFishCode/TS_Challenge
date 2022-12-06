/*
  11 - 元组转换为对象
  -------
  by sinoon (@sinoon) #简单 #object-keys
  
  ### 题目
  
  > 欢迎 PR 改进翻译质量。
  
  传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。
  
  例如：
  
  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
  
  type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```
  
  > 在 Github 上查看：https://tsch.js.org/11/zh-CN
*/


/* _____________ 你的代码 _____________ */

type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P
}

type test_to_obj = TupleToObject<typeof tuple>
type test_to_obj2 = TupleToObject<typeof tupleMix>

/**
 * T[number] 索引类型
 */

/* _____________ 测试用例 _____________ */


const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

// type cases = [
//   Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
//   Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
//   Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
// ]

type error = TupleToObject<[[1, 2], {}]>



/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/11/answer/zh-CN
  > 查看解答：https://tsch.js.org/11/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

