TypeScript Jest Mock clear/reset/restore Demo
==============================================

弄清楚`mockClear`, `mockReset`, `mockRestore` 三者之间的区别

对于mock的调用信息，这三个函数都会清除。

不同之外在于，对于之前在spy/mock自定义的行为，处理方式不同：

|      | mockClear | mockReset          | mockRestore         |ª
|------|-----------|--------------------|---------------------|
| spy  | keep      | clear              | restore to original |
| mock | keep      | clear              | clear               |

这里"clear"的意思是说，它会把自定义implementation一个返回简单的`() => undefined`函数。

```
npm install
npm test
```
