1. 右键 -> 更换效率壁纸
2. 开启服务，打开浏览器访问修改壁纸页面
3. 页面改好壁纸，调用接口
4. 接口收到图片，修改壁纸，关闭服务

## 桌面空白处右键增加更换壁纸
### 1. 打开注册表
使用 `windows` 键 + `R` ，打开运行框 输入 `regedit` 进入注册表

### 2. 找到 HKEY_CLASSES_ROOT -> DesktopBackground -> Shell
在 `Shell` 上右键，新建 -> 项，命名为：`更换壁纸`
在 `更换壁纸` 上右键，新建 -> 项，命名为：`Command`
选中 `Command`，双击右侧默认，数值数据改为：`"D:\SP\change-bg\test.vbs" "%1"`

## test.vbs 执行node命令
```vb
set objShell=wscript.createObject("wscript.shell")
Set oExec = objShell.Exec("cmd.exe /k node D:\SP\change-bg\setBg.js")
wscript.quit
Set oExec = Nothing 
Set objShell = Nothing 
```
