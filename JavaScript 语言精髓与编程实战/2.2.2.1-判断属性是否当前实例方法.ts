var x = 100
let y = 100
console.log(Object.getOwnPropertyDescriptor(globalThis, 'x')) // {...}
console.log(Object.getOwnPropertyDescriptor(globalThis, 'y')) // undefined

export {}