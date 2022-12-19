export type Equal<T, U> = (<T>() => T extends U ? true : false) extends (<U>() => U extends T ? true : false) ? true : false 

export type Expect<T> = T extends true ? true : false


export type MergeInsertions<T> = T extends object ? { [K in keyof T]: MergeInsertions<T[K]> } : T

export type Alike<X, Y> = Equal<MergeInsertions<X>, MergeInsertions<Y>>
