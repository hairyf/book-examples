// 模板字符串处理函数是一种隐式的函数调用
// 它通过在函数后跟一个模板字符串来调用函数
// 并按特定格式传入参数
function templateHandle(tpl: TemplateStringsArray, ...values:string[]){
  return tpl[0] + values[0]
}

const str = templateHandle`try call ${templateHandle.name}`
console.log(str)
export {}