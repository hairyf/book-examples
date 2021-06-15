/*
 * @Author: Mr.Mao
 * @Date: 2021-06-15 09:04:14
 * @LastEditTime: 2021-06-15 09:18:47
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

function MyObject() {}

// 方法一：修改原型
// MyObject.prototype.<propertyName> = ...;

// 方法一：重写原型
// MyObject.prototype = {}

// 方法三：继承原型
// MyObject.prototype = new ParentClassConstructor()