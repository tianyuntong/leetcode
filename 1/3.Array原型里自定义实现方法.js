let f = [1, 2, 3, 4, 5]

// 封装方法
// 传入的第一个参数是一个函数, 第二个参数是this指向
// 具体逻辑：是由这个函数内部来决定，与封装逻辑无关，注意区分  切记！！！
// 内部处理，和暴露出去的类型

////// map
// 此方法是将数组中的每个元素调用一个提供的函数，结果作为一个新的数组返回，并没有改变原来的数组
Array.prototype.mapByReduce = function (callBack, ctx) {
  if (typeof callBack !== 'function') {
    throw new Error('callBack must be a function')
  }
  return this.reduce((result, current, index, array) => {
    return [...result, callBack.call(ctx, current, index, array)]
  }, [])
}

Array.prototype.myMap = function (callBack, cts) {
  if (typeof callBack !== 'function') {
    throw new Error('callBack must be a function')
  }
  let result = []
  for (let i = 0; i < this.length; i++) {
    let value = callBack.call(cts, this[i], i, this)
    result = [...result, value]
  }
  return result
}

// let mapF = f.mapByReduce((item, index) => {
//   return { [item]: index }
// })
// console.log(mapF) // [ { '1': 0 }, { '2': 1 } ]

// let fns = f.myMap((item, index) => {
//   return { [item]: index }
// })
// console.log(fns)

////// filter
// 此方法是将所有元素进行判断，将满足条件的元素作为一个新的数组返回
Array.prototype.filterByReduce = function (callBack, ctx) {
  if (typeof callBack !== 'function') {
    throw new Error('callBack must be a function')
  }
  return this.reduce((result, current, index, array) => {
    let value = callBack.call(ctx, current, index, array)
    if (value) {
      return [...result, array[index]]
    }
    return [...result]
  }, [])
}

Array.prototype.myFilter = function(callBack, cts) {
  if (typeof callBack !== 'function') {
    throw new Error('callBack must be a function')
  }
  let result = []
  for (let i = 0; i < this.length; i++) {
    let value = callBack.call(cts, this[i], i, this)
    if (value) {
      result = [...result, this[i]]
    }
  }
  return result
}

// let f1 = f.filterByReduce((item) => item > 2)
// console.log(f1) // [3,4,5]

// let f1 = f.myFilter((item) => {
//   return item % 2
// })

// console.log(f1) // [ 1, 3, 5 ]

////// forEach
// 此方法是将数组中的每个元素执行传进提供的函数，没有返回值，注意和map方法区分
Array.prototype.myForEach = function (callBack, ctx) {
  if (typeof callBack !== 'function') {
    throw new Error('callBack must be a function')
  }
  for (let i = 0; i < this.length; i++) {
    callBack.call(ctx, this[i], i, this)
  }
}

// f.myForEach((item) => {
//   console.log(item)
// })
// 1
// 2
// 3
// 4
// 5

////// every
// 次方法是将所有元素进行判断，返回一个boolean，如果所有元素都满足判断条件，则返回true，否则返回false
Array.prototype.myEvery = function (callBack, ctx) {
  if (typeof callBack !== 'function') {
    throw new Error('callBack must be a function')
  }
  for (let i = 0; i < this.length; i++) {
    let value = callBack.call(ctx, this[i], i, this, ctx)
    if (!value) return false
    return true
  }
}

// let value = f.myEvery((item) => item > 0.1)
// console.log(value)

////// some
// 次方法将所有元素进行判断返回一个boolean，只要有一个条件满足则返回true，若所有条件都不满足则返回false
Array.prototype.mySome = function (callBack, ctx) {
  if (typeof callBack !== 'function') {
    throw new Error('callBack must be a function')
  }
  for (let i = 0; i < this.length; i++) {
    let value = callBack.call(ctx, this[i], i, this, ctx)
    if (value) {
      return true
    }
  }
  return false
}

// let value = f.mySome((item) => item > 2)
// console.log(value)

////// reduce
// 个人认为是数组中最厉害的方法，可以改变类型
// 第二个参数是初始值，如有默认值，从索引1开始遍历。 若没有初始值，则从索引0项开始
Array.prototype.myReduce = function (callBack, initValue, ctx) {
  if (typeof callBack !== 'function') {
    throw new Error('callBack must be a function')
  }
  let hasInitValue = initValue !== undefined
  let value = hasInitValue ? initValue : this[0]

  for (let i = hasInitValue ? 0 : 1; i < this.length; i++) {
    value = callBack.call(ctx, value, this[i], i, this, ctx)
  }
  return value
}
// let va = f.myReduce((init, item, index) => {
//   return { ...init, [item]: index }
// }, {})

// console.log(va)

////// push pop shift unshift

////// slice(?:start, ?:end) 不改变原数组

////// splice 改变原数组
