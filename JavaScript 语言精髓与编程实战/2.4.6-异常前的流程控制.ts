try {
  throw "";
}
catch(err) {
  console.log('--该语句会在捕捉错误后执行--')
}
finally {
  console.log('--该语句会在捕捉错误前执行--')
}
let a = +10
console.log(a)