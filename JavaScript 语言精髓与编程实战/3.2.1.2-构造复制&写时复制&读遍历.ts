/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-11 13:06:43
 * @LastEditTime: 2020-12-11 13:10:44
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
const obj1:any = new Object
const obj2:any = new Object
const prototype = Object.prototype as any
prototype.value = 'abc'
console.log(obj1.value)
// 查询自有表是否存在该属性
console.log(Object.getOwnPropertyNames(obj1))
obj1.value = 123
console.log(Object.getOwnPropertyNames(obj1))
