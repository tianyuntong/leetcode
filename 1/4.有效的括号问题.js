
// const isValid = (s) => {
//   while(true) {
//     let len = s.length
//     s = s.replace('{}', '').replace('[]', '').replace('()', '')
//      // 有两种情况s.length会等于len
//     // 1. s匹配完了，变成了空字符串
//     // 2. s无法继续匹配，导致其长度和一开始的len一样，比如({],一开始len是3，匹配完还是3，说明不用继续匹配了，结果就是false
//     if (s.length === len) {
//       return len === 0
//     }
//   }
// }

// console.log(isValid(s))

//   第一步：读取ch = {，属于左括号，入栈，此时栈内有{
//   第二步：读取ch = [，属于左括号，入栈，此时栈内有{[
//   第三步：读取ch = (，属于左括号，入栈，此时栈内有{[(
//   第四步：读取ch = )，属于右括号，尝试读取栈顶元素(和)正好匹配，将(出栈，此时栈内还剩{[
//   第五步：读取ch = ]，属于右括号，尝试读取栈顶元素[和]正好匹配，将[出栈，此时栈内还剩{
//   第六步：读取ch = }，属于右括号，尝试读取栈顶元素{和}正好匹配，将{出栈，此时栈内还剩''
//   第七步：栈内只能''，s = "{[()]}"符合有效的括号定义，返回true
let s = '[{[][]}[]]'
function isValid(s) {
  if (!s) return true
  if (s.length % 2) return false
  let stack = []

  let leftToRight = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (leftToRight[c]) {
      stack.push(c)
    } else {
      if (!stack.length || leftToRight[stack.pop()] !== c) {
        return false
      }
    }
  }

  return !stack.length // return false
}

console.log(isValid(s))
