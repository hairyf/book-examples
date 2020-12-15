/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-15 23:12:00
 * @LastEditTime: 2020-12-15 23:30:01
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
function MyObject() { }

function MyObjectEx() { }
// @ts-ignore
MyObjectEx.prototype = new MyObject()
MyObjectEx.prototype.constructor = MyObjectEx

function MyObjectEx2() { }
// @ts-ignore
MyObjectEx2.prototype = new MyObjectEx()
MyObjectEx2.prototype.constructor = MyObjectEx2

// @ts-ignore
const obj = new MyObjectEx2()

// 遍历实例原型链
let proto = Object.getPrototypeOf(obj)
while (proto) {
  console.log('>> ' + proto.constructor)
  proto = Object.getPrototypeOf(proto)
}
console.log('>> ' + proto)


// 继承原型链属性
// @ts-ignore
MyObject.prototype.aValue = 100
console.log(obj instanceof MyObject)
// @ts-ignore
console.log(obj.aValue)

// 重置到空白对象
Object.setPrototypeOf(obj, {})

// 重置原型到null
Object.setPrototypeOf(obj, null) 