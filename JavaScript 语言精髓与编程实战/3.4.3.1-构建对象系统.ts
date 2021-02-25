/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-02-25 13:29:34
 * @LastEditTime: 2021-02-25 13:31:32
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
function Mouse(){}

function Animal (name:string) {
  this.name = name
  this.say = function (message:string){
    console.log(this.name + ': ', message)
  }
  this.eat = function () {
    this.say('Yum!')
  }
}
