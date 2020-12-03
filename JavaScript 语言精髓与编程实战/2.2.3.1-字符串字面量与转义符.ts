// 3 + 2 - 5 是一个表达式
const num = 3 + 2 - 5
// 'test' 是一个字面量
const str = 'test'

// 当反斜线字符串 '\' 出现在一行的末尾
// 可用于表示连续的字符串声明, 这在声明大段文本快时很有用
const aTextBlock = '\
abc\
 \
123456789\
'
// ->>>> 'abc 123456789'

// 模板字符串的本质是一个字面量的引用
const templateStr = `>>${'Mr.Mao'}<<` // ↓↓
const template = { raw: ['>>', '<<'] } as any as TemplateStringsArray
const rawStr = String.raw(template, 'Mr.Mao')

// 模板字符串定义多行文本的声明
const multilineString = `
上面第一个换行符是有效的，而某些语言（例如 lua）中多行声明第一行换行符是无效的
如果要避免行末（包括上面说的第一行）的换行符，可以使用\\字符串来结尾，例如 \
这种声明连续字符串的规则仍然有效的。
`
console.log(multilineString)
export { }