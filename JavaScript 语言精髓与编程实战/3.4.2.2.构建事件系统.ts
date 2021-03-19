/*
 * @Author: Mr.Mao
 * @Date: 2021-03-19 08:55:31
 * @LastEditTime: 2021-03-19 08:59:05
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
function MyObject() { }
MyObject.prototype.onError = undefined

MyObject.prototype.doAction = function (str) {
  try {
    return eval(str)
  } catch(e) {
    if (this.onError) this.onError(e)
  }
}
// 创建对象
const obj = new MyObject()
// 添加事件处理柄局
obj.onError = function (e) {
  console.log(e)
}
obj.doAction('aObj.tage = 100')