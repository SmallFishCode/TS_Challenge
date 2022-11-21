export type Equal<T, U> = (<T>() => T extends U ? true : false) extends (<U>() => U extends T ? true : false) ? true : false 

export type Expect<T> = T extends true ? true : false


