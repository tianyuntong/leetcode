


// timer 传入类型为s秒
// 此方法为简易版，并未考虑缓存，报错信息等，未针对异常问题做处理

const StorageTimer = {
  setItem(key, value, timer = undefined) {
    if (!isNaN(timer) && Number(timer) && Number(timer) > 0) {
      let second = Number(timer) * 1000 // timer 转换为毫秒ms
      let date = new Date().getTime() // 获取当前时间戳。ms毫秒
      window.localStorage.setItem(key, `${date + second}&${JSON.stringify(value)}`)
    } else {
      window.localStorage.setItem(key, `${JSON.stringify(value)}`)
    }
  },
  getItem(key) {
    let value = window.localStorage.getItem(key)
    let index = value.indexOf('&')
    if (value) {
      const t = value.slice(0, index)
      if (t && t >= Date.now()) {
        // 未过期，返回&以后的数据
        value = JSON.parse(value.slice(index + 1))
      } else {
        // 时间过期后，手动为null，并删除key，合理控制缓存
        value = null
        window.localStorage.removeItem(key)
      }
    }
    return value
  },
}
