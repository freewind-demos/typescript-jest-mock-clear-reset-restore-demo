TypeScript Jest Mock clear/reset/restore Demo
==============================================

弄清楚`mockClear`, `mockReset`, `mockRestore` 三者之间的区别

对于mock的调用信息，这三个函数都会清除。

不同之外在于，对于之前在spy/mock自定义的行为，处理方式不同：

|      | mockClear | mockReset          | mockRestore         |ª
|------|-----------|--------------------|---------------------|
| spy  | keep      | clear to undefined | restore to original |
| mock | keep      | clear to undefined | clear to undefined  |

```
npm install
npm test
```
