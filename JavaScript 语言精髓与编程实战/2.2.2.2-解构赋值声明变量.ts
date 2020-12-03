// 使用数组解构赋值, 声明变量 x, y
const [x, y] = [1, 2]

// 使用对象解构赋值, 声明 height, width
// const {clientHeight: height, clientWidth: width} = window.document.body

// 在声明变量的赋值模板中使用剩余参数, 可声明数组变量
const [xx, yy, ...more] = [1, 2, 3, 4, 5, 6]

// 在对象解构赋值中使用剩余参数, 可以声明对象变量 moreProps
const { xxx, yyy, ...moreProps } = { xxx: 100, yyy: 100, z: 100 }
