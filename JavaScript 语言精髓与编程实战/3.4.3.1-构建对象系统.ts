/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-02-25 13:29:34
 * @LastEditTime: 2021-03-19 09:06:20
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
function Mouse(){}

/** 动物类 */
function Animal (name:string) {
  this.name = name
  this.say = function (message:string){
    console.log(this.name + ': ', message)
  }
  this.eat = function () {
    this.say('Yum!')
  }
}

/** 猫 */
function Cat() {
  // this.eat = function
}