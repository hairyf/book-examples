# 兼容环境下测试

本书环境所述环境包括`Chakra`、`JavaScriptCode`、`Node.js`、`SpiderMonkey`、`V8/xs`。使用`eshost`和`jsvu`来构建测试环境，并确保所有示例得到完整测试。

~~~makefile
# 安装 eshost
> npm install -g eshost-cli
# 安装 jsvu
> npm install -g jsvu

# 运行 jsvu 安装各个引擎
> jsvu

# (macOS) 将 JavaScript 引擎（以 Chakra 为例）托管给 eshost
eshost --add 'Chakra' ch ~/.jsvu/chakra

# (或 window) 同上
eshost --add "Chakra" ch "%USERPROFILE%\.jsvu\chakra.cmd"

# 测试（执行表达式）
eshost -tse '1+2'

# 测试（执行语句）
eshost -tse 'print(1+2)'

# 测试（装载并执行文件）
eshost -ts test.js
~~~



