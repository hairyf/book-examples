const strArr = [...'string'];
console.log(strArr)


function* foo() {
  yield* 'string'
}
const it = foo()
console.log(it.next())