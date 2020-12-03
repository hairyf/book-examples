const str = 'abcde'
const obj = new String(str)
function newToString() {
  return 'hello world!'
}
function func (val: String) {
  val.toString = newToString
}

// 示例 1: 传入值
func(str)
console.log(str)
console.log(str.toString())

// 示例 2: 传入引用
func(obj)
console.log(String(obj))
console.log(obj.toString())