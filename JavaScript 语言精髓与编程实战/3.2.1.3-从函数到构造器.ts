/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-11 13:11:15
 * @LastEditTime: 2020-12-11 13:32:00
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

// 实例在创建后，constructor属性总是会被先赋值为当前函数。
// 可以理解为如下代码
function asConstructor(fn:Function) {
  return Object.assign(fn, {
    prototype: {constructor: fn}
  })
}
const aClass = asConstructor(new Function)

function MyObject() {}
// 1. 显示为true，表明原型构造器总是指向函数自身
console.log(MyObject.prototype.constructor === MyObject)
// 2. 删除该成员
delete MyObject.prototype.constructor
// 3 上述删除操作会使改成员指向原型中的值
console.log(MyObject.prototype.constructor === Object)

// 更加空白的对象
function BlankObject() {}
(BlankObject.prototype as any) = null

// 当原型 prototype 是无效值的情况下，实例是通过new Object() 来创建的
const blankObject = new BlankObject
console.log(Object.getPrototypeOf(blankObject).constructor === Object) 