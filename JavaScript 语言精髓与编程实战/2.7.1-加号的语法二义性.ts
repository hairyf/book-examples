// 单个加号有三种作用, 第一种为字符串拼接
const str = 'hello' + 'world!'

// 第二种, 数值取正的一元运算符
const n = 10
const n2 = +n

// 或标识数值表达式的求和运算
const a = 100
const a2 = a + 1

// 如果表达式中存在字符串, 则优先按字符串连接的方式进行运算
const v1 = '123'
const v2 = 456
// 显示结果为 '123456'
console.log(v1 + v2)