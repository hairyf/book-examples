// NaN 不等于自身
// [NaN == NaN, NaN === NaN, NaN != NaN, NaN !== NaN];

// 符号可转换为true, 但不等值为true
// [Boolean(Symbol()), !Symbol(), Symbol()==true, Symbol()===true]

// 及时字面量相同的引入类型, 也不严格相同
// [{} === {}, /./ === /./]