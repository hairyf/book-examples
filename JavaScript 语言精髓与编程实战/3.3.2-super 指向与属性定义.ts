/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-15 23:28:40
 * @LastEditTime: 2020-12-15 23:40:19
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

class MyObject {
}
class MyObjectEx extends MyObject {
  constructor() {
    // 语义1：在类的构造方法声明中，super 指向父类的构造器，this 指向 new 创建的新实例
    // 相当于 super = MyObject.bind(this)
    super()

    // 语义2：（同上，this 指向调用本方法时 this 对象）
    // 相当于 super.toString = MyObject.prototype.toString.bind(this)
    super.toString()
  }

  foo() {
    // 语义2:（同上，this 指向调用本方法时 this 对象）
    // 相当于 super.foo = MyObject.prototype.foo.bind(this)
    super.foo()
  }
  static doSomething() {
    // 语义3：在静态类方法中使用 super.xxx，其 super 指向父类，this 指向
    // 调用当前方法的类（构造器函数，在本实例中是MyObjectEx）
    // 相当于 MyObject.do.bind(this)
    super.do()
  }
}