/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-11 12:31:59
 * @LastEditTime: 2020-12-11 12:40:47
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

// 显示类型 object，null 是一个属于对象类型的对象
console.log(typeof null)

// null 可被列举属性, 但不会产生影响
for (const key in null) {
  console.log(key)
}

// null 不是'空白对象(empty object)'
// 空白对象是一个标准的，通过Object()构造器或其子类
const obj = new Object()
// 由于对象字面量声明也会隐式的调用Object来构造实例
// 因此下面的代码也可以得到一个空白对象
const empty = {}

// 空白对象具有对象一切特性
console.log(typeof empty)
console.log(empty instanceof Object)
console.log('toString' in empty)

export {}