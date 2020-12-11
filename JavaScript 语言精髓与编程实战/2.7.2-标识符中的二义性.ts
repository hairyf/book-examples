/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-09 12:40:32
 * @LastEditTime: 2020-12-11 12:32:03
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
// @ts-ignore
// 括号表达式的返回值总是最后一个表达式的值
const str = ('123131231', 1000)

// 声明标签
aaa:
for (var i = 0; i < 10; i++) {
  console.log(i);
  for (var j = 0; j < 5; j++) {
    console.log(j);
    // 当j===2则跳出标签
    if (j === 2) break aaa;
  }
}
// @ts-ignore
{ 1, 2, 3 }

const code = eval(`if (true){
  ev: 12
}`)
console.log(code)

// 相当于 [ arr[1] ]
const arr = [[1][1]]
console.log(arr)


const table = [
  ['A', 1, 2, 3]
  // @ts-ignore
  ['B', 3, 4, 5],
  ['C', 6, 7, 8]
]
const table2 = [
  ['A', 1, 2, 3]
  // @ts-ignore
  ['B', 'length'],
  ['C', 6, 7, 8]
]
// {100: a = 100} = {100: a = 100}
export { }