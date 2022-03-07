


// 都成功才算成功有一个失败就失败了  [0,1,2]

Promise.prototype.myALl = function(promises) {
  return new Promise((resolve, reject) => {
    let arr = []
    let index = 0
    for (let  i = 0 ; i < promises.length; i++) {
      Promise.resolve(promises[i]).then((value) => {
        processData(i, value)
      }, reject)
    }

    function processData(i, value) {
      arr[i] = value
      if (promises.length === ++index) {
        resolve(arr)
      }
    }
  })
}