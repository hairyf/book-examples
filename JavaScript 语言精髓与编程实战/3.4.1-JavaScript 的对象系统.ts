/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-16 22:06:38
 * @LastEditTime: 2020-12-16 23:10:43
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
// 在一般情况的（例如基于类继承的）对象系统中，封装特性是由语法解析来实现的
// 而在历史中，JavaScript的原型继承模型是依赖“变量作用域”来实现封装特性的
function MyObject(this: any) {
  // 私有（private）变量
  const data = 100
  // 私有（private）方法
  function _run(v: any) {
    console.log(v)
  }
  // 公有（public）属性
  this.value = 'The data is';
  // 公有（public）方法
  this.run = function (v: any) {
    console.log(v)
  }
}


function Bird(this:any) {
  this.wing = 2;
  this.tweet = function () {
  }
  this.fly = function () {
    console.log('I can fly')
  }
}
function asBird(instance:any){
  Bird.call(instance)
  return instance
}
// 测试1：让一个对象“fly”，或让一只（模仿的）鸟“fly”
asBird(new Object).fly()

function isBird(instance:any){
  return instance instanceof Bird
}
function doFly(me:any) {
  if (!isBird(me)){
    throw new Error('对象不是 Bird 或其子类的实例.')
  }
  me.fly()
}
// @ts-ignore
doFly(new Bird)

doFly(asBird(new Object))

// 直接置 f2 的原型链
const f1 = new Function, f2 = new Function
Object.setPrototypeOf(f2, f1)

// 监测不到 f1 与 f2 之间的原型链关系
console.log(f2 instanceof f1)
// 使用 isPrototypeOf 监测
console.log(f1.isPrototypeOf(f2))